import { Container } from './styles'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <img src='./src/assets/Logo.svg' alt='' />
      <Form>
        <h1>Crie sua conta</h1>
        <Input label='Seu nome' placeholder='Exemplo: Maria da Silva' type='text' id='name' />
        <Input label='Email' placeholder='Exemplo: exemplo@exemplo.com.br' type='email' id='email' />
        <Input label='Senha' placeholder='No mínimo 6 caracteres' type='password' id='password' />
        <Button title='Criar conta' />
        <p>Já tenho uma conta</p>
      </Form>
    </Container>
  )
}
