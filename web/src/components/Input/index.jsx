import { Container } from './styles'

export function Input({ id, label, className, ...rest }) {
  return (
    <Container className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...rest} />
    </Container>
  )
}
