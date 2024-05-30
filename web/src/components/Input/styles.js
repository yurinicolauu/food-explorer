import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;

  width: 100%;

  font-family: 'Roboto';
  font-size: 1.6rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    padding: 1.2rem 1.4rem;
    border-radius: 0.8rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
