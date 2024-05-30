import { Container } from './styles'
import { Stepper } from '../Stepper'
import { Button } from '../Button'

export function Product() {
  return (
    <Container>
      <button id='favorite'>
        <img src='./src/assets/Heart.svg' alt='' />
      </button>
      <img src='./src/assets/Meal01.png' alt='' />
      <h2>Salada Ravanello</h2>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
      <p id='value'>R$ 46,97</p>
      <div>
        <Stepper count='01'></Stepper>
        <Button title='incluir' />
      </div>
    </Container>
  )
}
