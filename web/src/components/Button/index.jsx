import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Button({
  to,
  icon,
  title,
  disabled = false,
  secondary = false,
  ...rest
}) {
  return (
    <Link to={to}>
      <Container
        type='button'
        disabled={disabled}
        secondary={secondary}
        {...rest}>
        {icon && <img src={icon} />}
        {title}
      </Container>
    </Link>
  )
}
