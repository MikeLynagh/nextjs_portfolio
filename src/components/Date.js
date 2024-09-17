import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  if (!dateString) {
    return <time className="text-sm text-gray-500 dark:text-gray-400">No date available</time>;
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString} className="text-sm text-gray-500 dark:text-gray-400">{format(date, 'MMMM d, yyyy')}</time>;
}