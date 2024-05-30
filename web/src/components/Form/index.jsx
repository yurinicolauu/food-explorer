import { Container } from './styles'

export function Form({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}
