import { Container } from './styles'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <img src='./src/assets/Logo.svg' alt='' />
      <Form>
        <h1>Faça Login</h1>
        <Input label='Email' placeholder='Exemplo: exemplo@exemplo.com.br' type='email' id='email' />
        <Input label='Senha' placeholder='No mínimo 6 caracteres' type='password' id='password' />
        <Button title='Entrar' />
        <p>Crie uma conta</p>
      </Form>
    </Container>
  )
}
