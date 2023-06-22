import { styled } from 'styled-components'

export const ContentWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;

  > div {
    padding: 3rem;

    p {
      color: #afc2d4;
      font-size: ${({ theme }) => theme.fontSizes.medium_16};
      font-family: ${({ theme }) => theme.fontFamily.nunito};
      line-height: 160%;
      margin-bottom: 2rem;

      span {
        font-weight: ${({ theme }) => theme.fontWeight.medium};
      }
    }
  }
`
