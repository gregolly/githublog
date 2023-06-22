import { TerminalIcon } from '../icons/TerminalIcon'
import { HeaderContainer } from './styles'

import leftEffect from '../../assets/effect-left.png'
import rightEffect from '../../assets/effect-right.png'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <TerminalIcon width={45} height={40} />
          <h1>github blog</h1>
          <img className="leftEffect" src={leftEffect} alt="" />
          <img className="rightEffect" src={rightEffect} alt="" />
        </div>
      </HeaderContainer>
    </>
  )
}
