import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  gap: 0.8rem;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3.2rem;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.COLORS.DARK_800 : theme.COLORS.TOMATO_100};

  white-space: nowrap;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  border-radius: 0.5rem;

  font-weight: medium;
  font-size: 1.4rem;
  line-height: 2.4rem;

  > img {
    height: 2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`
