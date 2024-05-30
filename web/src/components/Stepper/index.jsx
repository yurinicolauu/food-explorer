import { Container } from './styles'

export function Stepper({ count }) {
  return (
    <Container>
      <button id='minus'>
        <img src='../src/assets/Minus.svg' alt='' />
      </button>
      <p>{count}</p>
      <button id='plus'>
        <img src='../src/assets/Plus.svg' alt='' />
      </button>
    </Container>
  )
}
