import { NavLink } from 'react-router-dom'
import { ChevronIcon } from '../../../../components/icons/ChevronIcon'
import { ListInfo, PostInfoWrapper } from './styles'
import { OutsideLinkIcon } from '../../../../components/icons/OutsideLinkIcon'
import { GithubIcon } from '../../../../components/icons/GIthubIcon'
import { CalendarIcon } from '../../../../components/icons/CalendarIcon'
import { CommentIcon } from '../../../../components/icons/CommentIcon'
import { ContentProps } from '../../../../@types/content-props'
import { formattedDate } from '../../../../utils/formattedDate'

export function PostInfo({ content }: ContentProps) {
  console.log(content.created_at)
  return (
    <PostInfoWrapper>
      <div>
        <NavLink to="/">
          <ChevronIcon width={12} height={12} color="#3294F8" />
          Voltar
        </NavLink>
        <NavLink to={content?.html_url}>
          ver no github
          <OutsideLinkIcon width={12} height={12} />
        </NavLink>
      </div>
      <h1>{content?.title}</h1>
      <ListInfo>
        <li>
          <GithubIcon width={18} height={18} />
          {content?.user?.login}
        </li>
        <li>
          <CalendarIcon width={18} height={18} />
          {formattedDate(content?.created_at) ?? ''}
        </li>
        <li>
          <CommentIcon width={18} height={18} />
          {content?.comments} Comentarios
        </li>
      </ListInfo>
    </PostInfoWrapper>
  )
}
