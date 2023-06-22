import { styled } from 'styled-components'

export const LinkCard = styled.a`
  text-decoration: none;
`

export const CardWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.basePost};
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  min-height: 200px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;

    h3 {
      color: ${({ theme }) => theme.colors.baseTitle};
      font-size: ${({ theme }) => theme.fontSizes.large_20};
      font-family: ${({ theme }) => theme.fontFamily.nunito};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      line-height: 160%;
      margin-bottom: 1.5rem;

      width: 85%;
    }

    span {
      color: ${({ theme }) => theme.colors.baseSpan};
      font-size: ${({ theme }) => theme.fontSizes.small_14};
      font-family: ${({ theme }) => theme.fontFamily.nunito};
      line-height: 160%;
    }
  }

  p {
    overflow: hidden;
    color: #afc2d4;
    text-overflow: ellipsis;
    whitespace: nowrap;
    font-size: ${({ theme }) => theme.fontSizes.small_14};
    font-family: ${({ theme }) => theme.fontFamily.nunito};
    line-height: 160%;

    position: absolute;
    right: 20px;
    top: 30px;
  }
`
