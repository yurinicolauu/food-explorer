import { Container } from './styles'
import { UploadSimple } from '../../assets'

export function FileButton({ id, label, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <img src={UploadSimple} />
      <input type='file' {...rest} />
    </Container>
  )
}
