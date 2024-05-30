import { Container } from './styles'

export function BackButton({ title }) {
  return (
    <Container>
      <img src='./src/assets/CaretLeft.svg' alt='Botão para esquerda' />
      <p>{title}</p>
    </Container>
  )
}
