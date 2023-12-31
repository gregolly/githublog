import { ContentProps } from '../../../../@types/content-props'
import { ContentWrapper } from './styles'

export function Content({ content }: ContentProps) {
  if (!content.title) {
    return null
  }
  return (
    <ContentWrapper>
      <div>
        <p>
          <span>{content?.body.substring(0, 100)}</span>
          {content?.body}
        </p>
      </div>
    </ContentWrapper>
  )
}
