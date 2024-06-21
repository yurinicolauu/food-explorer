import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 12.4rem;

  .content {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    width: 100%;
    max-width: 120rem;

    > img {
      height: 3rem;
      pointer-events: none;
    }

    > #signOut {
      background-color: transparent;
      border: none;
    }
  }
`
