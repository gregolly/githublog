import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formattedDate(value: string) {
  const distance = formatDistanceToNow(new Date(value), {
    addSuffix: true,
    locale: ptBR,
  })

  return distance
}
