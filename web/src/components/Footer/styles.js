import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 12.4rem;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 120rem;

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
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2.4rem 2.4rem;

    .content {
      > img {
        height: 1.8rem;
        pointer-events: none;
      }

      > p {
        font-size: 1.2rem;
      }
    }
  }
`
