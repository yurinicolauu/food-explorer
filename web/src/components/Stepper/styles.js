import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1.4rem;

  justify-content: center;
  align-items: center;

  > button {
    display: flex;
    width: 1.8rem;
    height: 1.8rem;

    justify-content: center;
    align-items: center;

    border: none;
    background-color: transparent;
  }

  > p {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 2rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
