import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { Ingredient } from '../../components/Ingredient'
import { BackButton } from '../../components/BackButton'

export function Product() {
  return (
    <Container>
      <Header />
      <div className='back-button'>
        <BackButton title={'voltar'} />
      </div>
      <Content>
        <img src='./src/assets/Meal01.png' alt='' />
        <div className='details'>
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
            pão naan dá um toque especial.
          </p>
          <div className='ingredients'>
            <Ingredient title='alface' />
            <Ingredient title='cebloa' />
            <Ingredient title='pão naan' />
            <Ingredient title='pepino' />
            <Ingredient title='rabanete' />
            <Ingredient title='tomate' />
          </div>
          <div className='stepper'>
            <Stepper count={'01'} />
            <Button title={'incluir R$ 25,00'} />
          </div>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}
