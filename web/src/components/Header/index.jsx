import { Container } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'

export function Header() {
  return (
    <Container>
      <img src='./src/assets/Logo.svg' alt='' />
      <Input placeholder='Busque por pratos ou infredientes'></Input>
      <Button title='Pedidos (0)' icon='./src/assets/Receipt.svg' />
      <button id='signOut'>
        <img src='./src/assets/SignOut.svg' />
      </button>
    </Container>
  )
}
