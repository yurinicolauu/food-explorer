import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 4.2rem;

  min-height: calc(100vh - 13.6rem);
  justify-content: space-between;

  .back-button {
    min-width: 100%;
    max-width: 120rem;
    padding: 0rem 12.4rem;
  }

  margin-top: 13.6rem;

  header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .back-button {
      padding: 0rem 5.6rem;
    }
  }
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  gap: 4.8rem;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  max-width: 120rem;
  padding: 0rem 12.4rem;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    height: 100%;

    .stepper {
      display: flex;
      gap: 3.3rem;
      margin-top: 2.4rem;
    }

    > h1 {
      font-size: 4rem;
      line-height: 140%;
      font-weight: medium;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .ingredients {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
    }

    > p {
      font-size: 2.4rem;
      line-height: 140%;
      font-weight: normal;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  img {
    width: 38rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    padding: 0rem 5.6rem;

    img {
      width: 26.4rem;
    }

    .details {
      text-align: center;

      h1 {
        font-size: 2.8rem;
      }

      > p {
        font-size: 1.6rem;
      }

      .ingredients {
        justify-content: center;
      }

      a {
        justify-content: center;
        width: 100%;
      }

      button {
        justify-content: center;
        width: 100%;
        padding: 1.2rem 1.4rem;
      }
    }
  }
`
