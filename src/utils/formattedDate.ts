import { formatDistanceToNow } from 'date-fns'

export function formattedDate(value: string) {
  const distance = formatDistanceToNow(new Date(value), {
    addSuffix: true,
  })

  return distance
}
