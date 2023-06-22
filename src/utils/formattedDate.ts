import { formatDistanceToNow } from 'date-fns'

export function formattedDate(createdAt: string) {
  const distance = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  })

  return distance
}
