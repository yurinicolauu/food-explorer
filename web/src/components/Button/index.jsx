import { Container } from './styles'

export function Button({
  icon,
  title,
  disabled = false,
  secondary = false,
  ...rest
}) {
  return (
    <Container
      type='button'
      disabled={disabled}
      secondary={secondary}
      {...rest}>
      {icon && <img src={icon} />}
      {title}
    </Container>
  )
}
