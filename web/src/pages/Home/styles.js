import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 16.4rem;
  width: 100%;

  header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: center;

  padding: 0 12.4rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 2.4rem;
    gap: 2.4rem;
  }
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  padding-right: 10rem;
  margin: 12rem 0 1.4rem 0;

  border-radius: 0.8rem;

  width: 100%;
  max-width: 120rem;
  height: 26rem;

  background: ${({ theme }) => theme.COLORS.GRADIENT_200};

  > img {
    position: absolute;
    left: -4%;
    bottom: 0%;

    pointer-events: none;
    object-fit: cover;
    object-position: top;

    width: 50%;
    height: 150%;
  }

  > h1 {
    font-size: 4rem;
    line-height: 140%;
    width: 50%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 0.8rem;
  }

  > p {
    font-family: 'Roboto';
    width: 50%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 4rem 2.4rem 4rem 4rem;
    margin: 0rem 0 1.4rem 0;
    height: 100%;

    > h1 {
      font-size: 1.8rem;
      line-height: 140%;
      width: 60%;
    }

    > p {
      font-size: 1.2rem;
      width: 60%;
    }

    > img {
      width: 45%;
      height: 100%;
    }
  }
`
