export function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Get user's timezone
export function getUserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Convert time to Bulgarian timezone (Europe/Sofia) and return separate date and time
export function convertToBulgarianTime(dateTimeString) {
  if (!dateTimeString) return { bgDate: "", bgTime: "" };

  const date = new Date(dateTimeString);

  // Convert to Bulgarian timezone
  const bulgarianTime = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Sofia",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const year = bulgarianTime.find((part) => part.type === "year").value;
  const month = bulgarianTime.find((part) => part.type === "month").value;
  const day = bulgarianTime.find((part) => part.type === "day").value;
  const hour = bulgarianTime.find((part) => part.type === "hour").value;
  const minute = bulgarianTime.find((part) => part.type === "minute").value;

  return {
    bgDate: `${year}-${month}-${day}`,
    bgTime: `${hour}:${minute}`,
  };
}

// Parse datetime-local input into combined date/time and timezone
export function parseDateTimeInput(dateTimeString) {
  if (!dateTimeString) return { clientsDate: "", clientsTimeZone: "" };

  const date = new Date(dateTimeString);
  const timezone = getUserTimezone();

  // Format as combined date and time string (YYYY-MM-DD HH:MM)
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const clientsDate = `${year}-${month}-${day} ${hours}:${minutes}`;

  return {
    clientsDate: clientsDate,
    clientsTimeZone: timezone,
  };
}

// Combine separate date, time, and timezone into datetime-local format
export function combineDateTimeInput(date, time, timezone) {
  if (!date || !time) return "";

  // Create a date object from the date and time strings
  const dateTime = new Date(`${date}T${time}`);

  // Format as datetime-local input format (YYYY-MM-DDTHH:MM)
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const day = String(dateTime.getDate()).padStart(2, "0");
  const hours = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

// Format datetime for display in user's local timezone
export function formatDateTimeForDisplay(dateTimeString) {
  if (!dateTimeString) return "";

  const date = new Date(dateTimeString);
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
