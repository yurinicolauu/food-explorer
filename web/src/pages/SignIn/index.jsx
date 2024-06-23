import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import { Container } from './styles'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <img src='/src/assets/Logo.svg' alt='' />
      <Form>
        <h1>Faça Login</h1>
        <Input
          label='Email'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          type='email'
          id='email'
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          label='Senha'
          placeholder='No mínimo 6 caracteres'
          type='password'
          id='password'
          onChange={e => setPassword(e.target.value)}
        />
        <Button title='Entrar' onClick={handleSignIn} />
        <Link to='/register'>Crie uma conta</Link>
      </Form>
    </Container>
  )
}
