import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  height: fit-content;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 6.4rem;

  border-radius: 1.6rem;

  > p {
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: medium;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
