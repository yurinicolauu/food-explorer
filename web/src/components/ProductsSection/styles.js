import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  width: 100%;
  max-width: 120rem;

  .inner {
    display: flex;
    gap: 2.7rem;
  }

  .previous,
  .next {
    width: 4rem;
    height: 4rem;

    position: absolute;
    z-index: 9;

    align-self: center;
    background-color: transparent;
    border: none;
  }

  .previous {
    left: 2rem;
    opacity: ${({ start }) => (JSON.parse(start) ? 0 : 1)};
  }

  .next {
    right: 2rem;
    opacity: ${({ end }) => (JSON.parse(end) ? 0 : 1)};
  }

  .carousel {
    overflow: hidden;
    position: relative;
    display: flex;

    &::before {
      content: '';
      width: 24rem;
      height: 100%;
      background: ${({ theme }) => theme.COLORS.GRADIENT_100};
      pointer-events: none;
      position: absolute;
      left: 0;
      z-index: 2;
      opacity: ${({ start }) => (JSON.parse(start) ? 0 : 1)};
    }

    &::after {
      content: '';
      width: 24rem;
      height: 100%;
      background: ${({ theme }) => theme.COLORS.GRADIENT_100};
      pointer-events: none;
      position: absolute;
      right: 0;
      transform: rotate(180deg);
      z-index: 3;
      opacity: ${({ end }) => (JSON.parse(end) ? 0 : 1)};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 100%;

    h1 {
      font-size: 1.8rem;
    }

    .inner {
      gap: 1.6rem;
    }

    .previous,
    .next {
      display: none;
    }

    .carousel {
      &::before {
        display: none;
      }

      &::after {
        display: none;
      }
    }
  }
`
