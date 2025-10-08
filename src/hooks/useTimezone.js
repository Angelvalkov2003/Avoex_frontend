import { useState, useEffect } from "react";

const useTimezone = () => {
  const [timezone, setTimezone] = useState(null);
  const [region, setRegion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectTimezone = () => {
      try {
        // Получаваме часовата зона
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimezone(userTimezone);

        // Получаваме UTC offset в минути
        const now = new Date();
        const utcOffset = now.getTimezoneOffset();

        // Ако UTC offset е отрицателен (Америка), показваме долари
        // Ако UTC offset е неотрицателен (Европа и останалите), показваме евро
        const detectedRegion = utcOffset < 0 ? "europe" : "america";

        setRegion(detectedRegion);
      } catch (error) {
        console.error("Error detecting timezone:", error);
        setRegion("europe"); // fallback
      } finally {
        setIsLoading(false);
      }
    };

    detectTimezone();
  }, []);

  return { timezone, region, isLoading };
};

export default useTimezone;
