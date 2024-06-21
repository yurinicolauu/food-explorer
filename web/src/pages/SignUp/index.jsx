import { useState } from 'react'
import { Container } from './styles'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { useNavigate, Link } from 'react-router-dom'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar!')
        }
      })
  }

  return (
    <Container>
      <img src='/src/assets/Logo.svg' alt='' />
      <Form>
        <h1>Crie sua conta</h1>
        <Input
          label='Seu nome'
          placeholder='Exemplo: Maria da Silva'
          type='text'
          id='name'
          onChange={e => setName(e.target.value)}
        />
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
        <Button title='Criar conta' onClick={handleSignUp} />
        <Link to='/'>Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
