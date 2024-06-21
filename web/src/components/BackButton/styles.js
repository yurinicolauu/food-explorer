import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 1.2rem;

  align-items: center;
  width: fit-content;

  > p {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
