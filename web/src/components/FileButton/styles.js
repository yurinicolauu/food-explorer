import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  cursor: pointer;

  width: 19.5rem;

  font-family: 'Roboto';
  font-size: 1.6rem;

  > img {
    height: 2rem;
    position: absolute;
    bottom: 1.4rem;
    left: 1.4rem;
  }

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    color: transparent;
    cursor: pointer;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    padding: 1.2rem 1.4rem 1.2rem 4.8rem;
    border-radius: 0.8rem;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &::before {
      content: 'Selecione imagem';
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;

    input {
      height: 4.8rem;
      padding: 0;
    }

    input::before {
      width: 100%;
      text-align: center;
      position: absolute;
      top: 50%;
    }
  }
`
