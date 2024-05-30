import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;

  width: 100%;

  font-family: 'Roboto';
  font-size: 1.6rem;

  > img {
    height: 2rem;
    position: absolute;
  }

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    color: transparent;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    padding: 1.2rem 1.4rem;
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
`
