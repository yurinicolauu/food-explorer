import { Container } from './styles'
import { CaretLeft } from '../../assets'

export function BackButton({ title, ...rest }) {
  return (
    <Container to={-1} {...rest}>
      <img src={CaretLeft} alt='Botão para esquerda' />
      <p>{title}</p>
    </Container>
  )
}
