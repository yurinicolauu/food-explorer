import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 1.4rem;
  font-weight: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  padding: 0.4rem 0.8rem;

  border-radius: 0.5rem;
`
