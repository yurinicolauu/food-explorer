import { Container } from './styles'
import { Minus, Plus } from '../../assets'

export function Stepper({ count }) {
  return (
    <Container>
      <button id='minus'>
        <img src={Minus} alt='' />
      </button>
      <p>{count}</p>
      <button id='plus'>
        <img src={Plus} alt='' />
      </button>
    </Container>
  )
}
