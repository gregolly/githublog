import { NavLink } from 'react-router-dom'
import { ChevronIcon } from '../../../../components/icons/ChevronIcon'
import { ListInfo, PostInfoWrapper } from './styles'
import { OutsideLinkIcon } from '../../../../components/icons/OutsideLinkIcon'
import { GithubIcon } from '../../../../components/icons/GIthubIcon'
import { CalendarIcon } from '../../../../components/icons/CalendarIcon'
import { CommentIcon } from '../../../../components/icons/CommentIcon'

export function PostInfo() {
  return (
    <PostInfoWrapper>
      <div>
        <NavLink to="/">
          <ChevronIcon width={12} height={12} color="#3294F8" />
          Voltar
        </NavLink>
        <NavLink to="#">
          ver no github
          <OutsideLinkIcon width={12} height={12} />
        </NavLink>
      </div>
      <h1>JavaScript data types and data structures</h1>
      <ListInfo>
        <li>
          <GithubIcon width={18} height={18} />
          cameronwll
        </li>
        <li>
          <CalendarIcon width={18} height={18} />
          Ha 1 dia
        </li>
        <li>
          <CommentIcon width={18} height={18} />
          32 Comentarios
        </li>
      </ListInfo>
    </PostInfoWrapper>
  )
}
