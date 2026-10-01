import { CampusDeadline } from '@/types/deadline';

function formatIcsDate(targetDate: string, timeCutoff?: string): { start: string; end: string } {
  // targetDate is 'YYYY-MM-DD'
  const cleanDate = targetDate.replace(/-/g, '');

  if (!timeCutoff) {
    // All-day event: DTSTART;VALUE=DATE:YYYYMMDD
    return {
      start: cleanDate,
      end: cleanDate,
    };
  }

  // Parse approximate hour from cutoff (e.g., '4:00 PM PST' -> 16:00, '5:00 PM PST' -> 17:00)
  let hour = 17; // default 5 PM
  let minute = '00';

  if (timeCutoff.includes('4:00 PM')) {
    hour = 16;
  } else if (timeCutoff.includes('5:00 PM')) {
    hour = 17;
  } else if (timeCutoff.includes('11:59 PM')) {
    hour = 23;
    minute = '59';
  } else if (timeCutoff.includes('12:00 PM') || timeCutoff.includes('noon')) {
    hour = 12;
  }

  const hourStr = hour.toString().padStart(2, '0');
  const startStr = `${cleanDate}T${hourStr}${minute}00`;
  const endHourStr = Math.min(hour + 1, 23).toString().padStart(2, '0');
  const endStr = `${cleanDate}T${endHourStr}${minute}00`;

  return { start: startStr, end: endStr };
}

/**
 * Generate RFC 5545 standard .ics file contents for a set of UCI deadlines.
 */
export function generateIcsCalendar(deadlines: CampusDeadline[], calendarName = 'UCI Academic Deadlines (everyUCI)'): string {
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//everyUCI//Campus Deadlines Hub//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${calendarName}`,
    'X-WR-TIMEZONE:America/Los_Angeles',
  ];

  const nowStamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  for (const d of deadlines) {
    const { start, end } = formatIcsDate(d.targetDate, d.timeCutoff);
    const summaryPrefix = d.isStrict ? '⚠️ [STRICT] ' : '📅 ';
    const guideLink = d.guideSlug ? `https://everyuci.vercel.app/guides/${d.guideSlug}` : d.actionUrl;
    const description = `${d.description}\\n\\nConsequence if missed: ${d.consequence}\\n\\nVerified Guide: ${guideLink}`;

    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${d.id}@everyuci.app`);
    lines.push(`DTSTAMP:${nowStamp}`);

    if (!d.timeCutoff) {
      lines.push(`DTSTART;VALUE=DATE:${start}`);
      lines.push(`DTEND;VALUE=DATE:${end}`);
    } else {
      lines.push(`DTSTART;TZID=America/Los_Angeles:${start}`);
      lines.push(`DTEND;TZID=America/Los_Angeles:${end}`);
    }

    lines.push(`SUMMARY:${summaryPrefix}${d.title}`);
    lines.push(`DESCRIPTION:${description}`);
    lines.push('LOCATION:University of California\\, Irvine');
    lines.push('STATUS:CONFIRMED');
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

/**
 * Trigger client-side browser download of the .ics file
 */
export function downloadIcsFile(filename: string, content: string) {
  if (typeof window === 'undefined') return;
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Generate a direct "Add to Google Calendar" web link for a single deadline
 */
export function getGoogleCalendarUrl(deadline: CampusDeadline): string {
  const { start, end } = formatIcsDate(deadline.targetDate, deadline.timeCutoff);
  const guideLink = deadline.guideSlug
    ? `https://everyuci.vercel.app/guides/${deadline.guideSlug}`
    : deadline.actionUrl;

  const title = (deadline.isStrict ? '⚠️ [STRICT] ' : '') + deadline.title;
  const details = `${deadline.description}\n\nConsequence if missed: ${deadline.consequence}\n\nGuide: ${guideLink}`;

  const datesParam = deadline.timeCutoff ? `${start}/${end}` : `${start}/${end}`;

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', title);
  url.searchParams.set('dates', datesParam);
  url.searchParams.set('details', details);
  url.searchParams.set('location', 'University of California, Irvine');
  url.searchParams.set('ctz', 'America/Los_Angeles');

  return url.toString();
}
