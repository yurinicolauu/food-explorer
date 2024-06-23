import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  position: relative;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  align-items: center;
  text-align: center;

  min-width: 30.4rem;
  width: 30.4rem;
  height: 100%;
  padding: 2.4rem;
  border-radius: 0.8rem;

  > button {
    display: flex;
    position: absolute;
    justify-content: flex-end;
    background-color: transparent;
    border: none;

    right: 1.8rem;
    top: 1.6rem;

    > img {
      height: 2.2rem;
      width: 2.2rem;
    }
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > p {
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .link-image {
    width: 17.6rem;
  }

  > div {
    display: flex;
    gap: 1.6rem;
  }

  #value {
    font-family: 'Roboto';
    font-size: 3.2rem;
    font-weight: normal;

    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 1.2rem;

    min-width: 21rem;
    width: 21rem;

    .link-image {
      width: 8.8rem;
    }

    > h2 {
      font-size: 1.4rem;
    }

    > .description {
      display: none;
    }

    #value {
      font-family: 'Roboto';
      font-size: 1.6rem;
    }

    > div {
      flex-direction: column;
      width: 100%;
      justify-content: center;

      button,
      a {
        width: 100%;
        justify-content: center;
      }
    }
  }
`
