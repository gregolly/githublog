import { styled } from 'styled-components'

export const SearchFormWrapper = styled.form`
  width: 1200px;
  margin: 0 auto;
  margin-top: 4.5rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    margin-bottom: 12px;

    span {
      font-size: ${({ theme }) => theme.fontSizes.medium_18};
    }

    span + span {
      color: ${({ theme }) => theme.colors.baseSpan};
      font-size: ${({ theme }) => theme.fontSizes.small_14};
      font-family: inherit;
      line-height: 160%;
    }
  }

  input {
    width: 100%;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.colors.baseInput};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.baseBorder};
    border-radius: 6px;
  }
`
