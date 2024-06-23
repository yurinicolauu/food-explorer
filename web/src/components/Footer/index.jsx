import { Container } from './styles'
import { LogoGrey } from '../../assets'

export function Footer() {
  return (
    <Container>
      <div className='content'>
        <img src={LogoGrey} alt='' />
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}
