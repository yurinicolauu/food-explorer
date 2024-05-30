import { Container } from './styles'

export function Input({ id, label, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...rest} />
    </Container>
  )
}
