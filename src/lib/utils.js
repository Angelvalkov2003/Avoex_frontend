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

// Generate time slots for whole hours from 7 AM to 6 PM
export function generateTimeSlots(timezone = null) {
  const slots = [];
  const targetTimezone = timezone || getUserTimezone();
  const isUS =
    targetTimezone.includes("America/") || targetTimezone.includes("US/");

  for (let hour = 7; hour <= 18; hour++) {
    const timeString = `${hour.toString().padStart(2, "0")}:00`;

    // Format time based on timezone
    const displayTime = new Date(`2000-01-01T${timeString}`).toLocaleTimeString(
      isUS ? "en-US" : "en-GB",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: isUS, // 12-hour format for US, 24-hour for others
        timeZone: targetTimezone,
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
export function convertFromBulgarianTime(bgDate, bgTime, toTimezone = null) {
  if (!bgDate || !bgTime) return { clientDate: "", clientTime: "" };

  // Get the client's timezone
  const clientTimezone = toTimezone || getUserTimezone();

  // Create a date object from the Bulgarian time
  const bulgarianDateTimeString = `${bgDate}T${bgTime}`;

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

  // Adjust the date to represent the correct UTC time
  const adjustedDate = new Date(sofiaDate.getTime() - sofiaOffsetMs);

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

  return result;
}

// Parse separate date and time inputs into combined date/time and timezone
export function parseDateTimeInput(
  selectedDate,
  selectedTime,
  timezone = null
) {
  if (!selectedDate || !selectedTime)
    return { clientsDate: "", clientsTimeZone: "" };

  const selectedTimezone = timezone || getUserTimezone();

  // Format as combined date and time string (YYYY-MM-DD HH:MM)
  const clientsDate = `${selectedDate} ${selectedTime}`;

  return {
    clientsDate: clientsDate,
    clientsTimeZone: selectedTimezone,
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

// Check if a date is Monday in Bulgarian timezone
export function isMondayInBulgarianTime(date) {
  if (!date) return false;

  // Create a date object from the date string
  const dateObj = new Date(date);

  // Get the day of the week in Bulgarian timezone
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Sofia",
    weekday: "long",
  }).format(dateObj);

  return dayOfWeek === "Monday";
}

// Check if a date is Wednesday in Bulgarian timezone
export function isWednesdayInBulgarianTime(date) {
  if (!date) return false;

  // Create a date object from the date string
  const dateObj = new Date(date);

  // Get the day of the week in Bulgarian timezone
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Sofia",
    weekday: "long",
  }).format(dateObj);

  return dayOfWeek === "Wednesday";
}

// Check if a date is Friday in Bulgarian timezone
export function isFridayInBulgarianTime(date) {
  if (!date) return false;

  // Create a date object from the date string
  const dateObj = new Date(date);

  // Get the day of the week in Bulgarian timezone
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Sofia",
    weekday: "long",
  }).format(dateObj);

  return dayOfWeek === "Friday";
}

// Generate all blocked time slots based on day of the week
export function generateBlockedSlots(date, clientTimezone) {
  if (!date || !clientTimezone) {
    return [];
  }

  const blockedSlots = [];

  // Monday: 10:00-15:00 Bulgarian time
  if (isMondayInBulgarianTime(date)) {
    for (let hour = 10; hour <= 15; hour++) {
      const bgTime = `${hour.toString().padStart(2, "0")}:00`;
      const clientTime = convertFromBulgarianTime(date, bgTime, clientTimezone);
      if (clientTime.clientTime) {
        blockedSlots.push(clientTime.clientTime);
      }
    }
  }

  // Wednesday: 07:00-09:00 Bulgarian time
  if (isWednesdayInBulgarianTime(date)) {
    for (let hour = 7; hour <= 9; hour++) {
      const bgTime = `${hour.toString().padStart(2, "0")}:00`;
      const clientTime = convertFromBulgarianTime(date, bgTime, clientTimezone);
      if (clientTime.clientTime) {
        blockedSlots.push(clientTime.clientTime);
      }
    }
  }

  // Friday: 07:00-12:00 Bulgarian time
  if (isFridayInBulgarianTime(date)) {
    for (let hour = 7; hour <= 12; hour++) {
      const bgTime = `${hour.toString().padStart(2, "0")}:00`;
      const clientTime = convertFromBulgarianTime(date, bgTime, clientTimezone);
      if (clientTime.clientTime) {
        blockedSlots.push(clientTime.clientTime);
      }
    }
  }

  // Every day: 17:00 and 18:00 Bulgarian time
  const dailyBlockedHours = [17, 18];
  for (const hour of dailyBlockedHours) {
    const bgTime = `${hour.toString().padStart(2, "0")}:00`;
    const clientTime = convertFromBulgarianTime(date, bgTime, clientTimezone);
    if (clientTime.clientTime) {
      blockedSlots.push(clientTime.clientTime);
    }
  }

  return blockedSlots;
}

// Legacy function for backward compatibility
export function generateMondayBlockedSlots(date, clientTimezone) {
  return generateBlockedSlots(date, clientTimezone);
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
