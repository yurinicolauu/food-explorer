import styled from 'styled-components'

export const Container = styled.div`
  font-size: 1.4rem;
  font-weight: medium;
  line-height: 2.4rem;
  border-radius: 0.5rem;

  padding: 0.4rem 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
