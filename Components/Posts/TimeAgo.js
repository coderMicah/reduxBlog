
import { parseISO, formatDistanceToNow } from 'date-fns'

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span className='text-gray-500 font-semibold text-xs' title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}