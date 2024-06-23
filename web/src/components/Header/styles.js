import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 12.4rem;

  .menu {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 99;
    transition: 0.3s;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    .header {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.DARK_600};
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 5.6rem 2.8rem 2.4rem;
      height: 12rem;
      gap: 1.6rem;

      .close {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
      }

      .title {
        font-family: 'Roboto';
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .content-menu {
      padding: 3.6rem 2.8rem 2.4rem;
      display: flex;
      flex-direction: column;
      gap: 3.6rem;

      .button-menu {
        height: 5.4rem;
        width: 100%;
        display: flex;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

        font-size: 2.4rem;
        font-weight: 200;
        align-items: center;
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    width: 100%;
    max-width: 120rem;

    > img {
      width: 19.7rem;
      pointer-events: none;
    }

    > #signOut {
      background-color: transparent;
      border: none;
    }

    > #menu {
      background-color: transparent;
      border: none;
      display: none;
    }

    input {
      width: 100%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 5.6rem 2.8rem 2.4rem;

    #signOut,
    .top-button,
    .search-top {
      display: none;
      width: 0%;
    }

    .content {
      justify-content: center;

      > #menu {
        background-color: transparent;
        border: none;
        display: flex;
        position: absolute;
        left: 2.8rem;
      }
    }
  }
`
