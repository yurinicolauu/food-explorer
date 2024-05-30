import { Container } from './styles'

export function FileButton({ id, label, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <img src='./src/assets/UploadSimple.svg' />
      <input type='file' {...rest} />
    </Container>
  )
}
