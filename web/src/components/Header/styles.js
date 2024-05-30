import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  padding: 2.4rem 12.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > img {
    height: 3rem;
    pointer-events: none;
  }

  > #signOut {
    background-color: transparent;
    border: none;
  }
`
