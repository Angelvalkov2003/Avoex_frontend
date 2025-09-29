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

// Detect if user is from US based on timezone
export function isUserFromUS() {
  const timezone = getUserTimezone();
  return (
    timezone.includes("America/") ||
    timezone.includes("US/") ||
    timezone.includes("Pacific/") ||
    timezone.includes("Mountain/") ||
    timezone.includes("Central/") ||
    timezone.includes("Eastern/")
  );
}

// Generate time slots for whole hours from 9 AM to 10 PM
export function generateTimeSlots() {
  const slots = [];
  const isUS = isUserFromUS();

  for (let hour = 9; hour <= 22; hour++) {
    const timeString = `${hour.toString().padStart(2, "0")}:00`;

    // Format time based on user location
    const displayTime = new Date(`2000-01-01T${timeString}`).toLocaleTimeString(
      isUS ? "en-US" : "en-GB",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: isUS, // 12-hour format for US, 24-hour for others
      }
    );

    slots.push({
      value: timeString,
      label: displayTime,
    });
  }
  return slots;
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

// Convert Bulgarian time to client's timezone and return separate date and time
export function convertFromBulgarianTime(bgDate, bgTime) {
  if (!bgDate || !bgTime) return { clientDate: "", clientTime: "" };

  // Get the client's timezone
  const clientTimezone = getUserTimezone();
  console.log("🌍 Клиентска часова зона:", clientTimezone);

  // Create a date object from the Bulgarian time
  const bulgarianDateTimeString = `${bgDate}T${bgTime}`;
  console.log("🇧🇬 Българско време string:", bulgarianDateTimeString);

  // Create a date object and treat it as if it's in Sofia timezone
  // We need to manually create a date that represents Sofia time correctly
  const [year, month, day] = bgDate.split("-").map(Number);
  const [hour, minute] = bgTime.split(":").map(Number);

  // Create a date object in Sofia timezone
  // We'll use a trick: create the date in UTC and then adjust
  const sofiaDate = new Date(Date.UTC(year, month - 1, day, hour, minute));

  // Get the timezone offset for Sofia at this specific date
  const sofiaOffset = new Intl.DateTimeFormat("en", {
    timeZone: "Europe/Sofia",
    timeZoneName: "longOffset",
  }).formatToParts(sofiaDate);

  // Extract the offset from the timezone name
  const offsetString =
    sofiaOffset.find((p) => p.type === "timeZoneName")?.value || "+02:00";
  const offsetMatch = offsetString.match(/([+-])(\d{2}):(\d{2})/);

  if (!offsetMatch) {
    console.error("Could not parse Sofia timezone offset");
    return { clientDate: "", clientTime: "" };
  }

  const [, sign, offsetHours, offsetMinutes] = offsetMatch;
  const totalOffsetMs =
    (parseInt(offsetHours) * 60 + parseInt(offsetMinutes)) * 60 * 1000;
  const sofiaOffsetMs = sign === "+" ? totalOffsetMs : -totalOffsetMs;

  console.log("⏰ Sofia offset:", offsetString, "ms:", sofiaOffsetMs);

  // Adjust the date to represent the correct UTC time
  const adjustedDate = new Date(sofiaDate.getTime() - sofiaOffsetMs);

  console.log("📅 Sofia дата:", sofiaDate);
  console.log("📅 UTC дата:", adjustedDate);

  // Convert to client's timezone
  const clientTime = new Intl.DateTimeFormat("en-CA", {
    timeZone: clientTimezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(adjustedDate);

  const resultYear = clientTime.find((part) => part.type === "year").value;
  const resultMonth = clientTime.find((part) => part.type === "month").value;
  const resultDay = clientTime.find((part) => part.type === "day").value;
  const resultHour = clientTime.find((part) => part.type === "hour").value;
  const resultMinute = clientTime.find((part) => part.type === "minute").value;

  const result = {
    clientDate: `${resultYear}-${resultMonth}-${resultDay}`,
    clientTime: `${resultHour}:${resultMinute}`,
  };

  console.log("🎯 Резултат:", result);

  return result;
}

// Parse separate date and time inputs into combined date/time and timezone
export function parseDateTimeInput(selectedDate, selectedTime) {
  if (!selectedDate || !selectedTime)
    return { clientsDate: "", clientsTimeZone: "" };

  const timezone = getUserTimezone();

  // Format as combined date and time string (YYYY-MM-DD HH:MM)
  const clientsDate = `${selectedDate} ${selectedTime}`;

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
