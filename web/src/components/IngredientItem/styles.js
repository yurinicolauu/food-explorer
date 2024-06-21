import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  button {
    background-color: transparent;
    border: none;
    width: 0.8rem;
    height: 0.8rem;
    display: flex;

    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  input {
    font-size: 1.6rem;
    font-weight: medium;
    line-height: 100%;
    font-family: 'Roboto';
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 1.6rem;
    width: 8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
