import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.baseProfile};
  padding: 4rem 0 8rem 0;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fontFamily.coda};
      text-transform: uppercase;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      margin-top: 1.25rem;
    }

    img {
      position: absolute;
    }

    .leftEffect {
      left: 0;
    }

    .rightEffect {
      right: 0;
      top: 10px;
    }
  }
`
