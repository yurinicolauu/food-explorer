import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  margin-top: 13.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - 13.6rem);
  justify-content: space-between;

  header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
  }
`

export const Form = styled.div`
  display: grid;
  grid-template-areas:
    't t t t t'
    'a b b c c'
    'd d d d e'
    'f f f f f'
    'g g g g g';
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
  gap: 3.2rem;

  > Button {
    grid-area: g;
    justify-self: right;
    width: fit-content;
  }

  > .title {
    grid-area: t;
  }

  > #file-button {
    grid-area: a;
    width: 100%;

    input {
      width: 100%;
    }
  }

  > .name {
    grid-area: b;
    min-width: 100%;
    input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  > .category {
    grid-area: c;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    position: relative;

    font-family: 'Roboto';
    font-size: 1.6rem;

    &::after {
      content: url('/src/assets/CaretDown.svg');
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      right: 1.4rem;
      bottom: 1.4rem;
    }

    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > select {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border: none;
      height: 100%;
      font-family: 'Roboto';
      font-size: 1.6rem;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      padding: 1.2rem 1.4rem;
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  > .ingredients {
    grid-area: d;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    position: relative;

    width: 100%;

    font-family: 'Roboto';
    font-size: 1.6rem;

    > p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    border: none;

    > .ingredients-box {
      padding: 0.8rem 0.8rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      display: flex;
      flex-direction: row;
      row-gap: 0.8rem;
      column-gap: 1.6rem;

      flex-wrap: wrap;
    }
  }

  > .price {
    grid-area: e;
    width: 100%;
    input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  > .description {
    grid-area: f;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    position: relative;

    width: 100%;

    font-family: 'Roboto';
    font-size: 1.6rem;

    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > textarea {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border: none;
      height: 100%;
      min-height: 17.2rem;
      padding: 1.2rem 1.4rem;
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    a {
      justify-content: center;
      width: 100%;
    }

    button.buttons {
      justify-content: center;
      width: 100%;
      padding: 1.2rem 1.4rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  min-width: 100%;
  max-width: 120rem;
  padding: 0rem 12.4rem 5.2rem 12.4rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0rem 3.2rem 5.2rem 3.2rem;
  }
`
