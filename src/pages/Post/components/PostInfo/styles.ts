import { styled } from 'styled-components'

export const PostInfoWrapper = styled.div`
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  margin: 0 auto;
  width: 1200px;
  margin-top: -85px;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.nunito};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      font-size: ${({ theme }) => theme.fontSizes.small_12};
      text-transform: uppercase;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.baseTitle};
    /* Title/Title L */
    font-size: ${({ theme }) => theme.fontSizes.large_24};
    font-family: ${({ theme }) => theme.fontFamily.nunito};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 130%;
    margin-top: 1.5rem;
  }
`
export const ListInfo = styled.ul`
  display: flex;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.medium_16};
  color: ${({ theme }) => theme.colors.baseSubtitle};
  font-family: ${({ theme }) => theme.fontFamily.nunito};
  line-height: 160%;
  margin-top: 8px;
  gap: 1.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 100%;

    svg {
      opacity: 0.5;
    }
  }
`
