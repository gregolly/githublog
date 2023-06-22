import { formattedDate } from '../../../../utils/formattedDate'
import { CardWrapper, LinkCard } from './style'

export interface CardPostProps {
  title: string
  body: string
  created_at: Date
}

// eslint-disable-next-line camelcase
export function CardPost({ title, body, created_at }: CardPostProps) {
  return (
    <LinkCard href="/post">
      <CardWrapper>
        <div>
          <h3>{title.substring(0, 60) + '...'}</h3>
          <span>{body.substring(0, 200) + '...'}</span>
        </div>
        <p>{formattedDate(created_at)}</p>
      </CardWrapper>
    </LinkCard>
  )
}
