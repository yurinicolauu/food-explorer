import { Container } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { useAuth } from '../../hooks/auth'

export function Header({ onSearchChange }) {
  const { signOut } = useAuth()
  return (
    <Container>
      <div className='content'>
        <img src='/src/assets/Logo.svg' alt='' />
        <Input
          placeholder='Busque por pratos ou ingredientes'
          onChange={e => onSearchChange(e.target.value)}></Input>
        <Button title='Pedidos (0)' icon='/src/assets/Receipt.svg' />
        <button id='signOut' onClick={signOut}>
          <img src='/src/assets/SignOut.svg' />
        </button>
      </div>
    </Container>
  )
}
