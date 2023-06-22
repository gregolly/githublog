import { styled } from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  margin: 0 auto;
  width: 1200px;
  margin-top: -85px;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.nunito};

  img {
    width: 150px;
  }
`

export const ContentContainer = styled.div`
  margin-left: 2rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.large_24};
    font-family: inherit;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 130%;

    color: ${({ theme }) => theme.colors.white};
  }

  p {
    color: ${({ theme }) => theme.colors.baseText};
    font-size: ${({ theme }) => theme.fontSizes.medium_16};
    font-family: inherit;
    line-height: 160%;

    margin-top: 8px;
  }

  .navLink {
    display: flex;
    gap: 8px;
    font-size: ${({ theme }) => theme.fontSizes.small_12};
    font-family: inherit;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 160%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    position: absolute;
    right: 50px;
    top: 40px;
  }
`

export const ListInfo = styled.ul`
  display: flex;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.medium_16};
  color: ${({ theme }) => theme.colors.baseSubtitle};
  font-family: ${({ theme }) => theme.fontFamily.nunito};
  margin-top: 1.5rem;
  line-height: 160%;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }

  li {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      opacity: 0.5;
    }
  }
`
