import { Container } from './styles'

export function BackButton({ title, ...rest }) {
  return (
    <Container to={-1} {...rest}>
      <img src='/src/assets/CaretLeft.svg' alt='Botão para esquerda' />
      <p>{title}</p>
    </Container>
  )
}
