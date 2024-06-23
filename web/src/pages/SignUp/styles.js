import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 9.6rem;

  min-height: 100vh;
  width: 100%;
  max-width: 120rem;

  h1 {
    text-align: center;
  }

  > img {
    height: 4.8rem;
  }

  button,
  a {
    width: 100%;
    text-align: center;
  }

  Form {
    width: 47.6rem;
    align-items: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    padding: 0;
    justify-content: center;
    gap: 7rem;
    max-width: 100%;

    h1 {
      display: none;
    }

    > img {
      height: 4.4rem;
    }

    > Form {
      width: 100%;
      align-items: center;
      background-color: transparent;

      button {
        padding: 1.2rem 1.4rem;
      }
    }
  }
`
