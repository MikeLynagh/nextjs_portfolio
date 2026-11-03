import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  if (!dateString) {
    return <time>No date available</time>;
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMMM d, yyyy')}</time>;
}
