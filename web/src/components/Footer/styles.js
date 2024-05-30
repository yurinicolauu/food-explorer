import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem 12.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > img {
    height: 3rem;
    pointer-events: none;
  }

  > p {
    font-size: 1.4rem;
    line-height: 160%;
    font-family: 'Roboto';
    font-weight: normal;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`