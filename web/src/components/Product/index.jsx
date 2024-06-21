import { Container } from './styles'
import { Stepper } from '../Stepper'
import { Button } from '../Button'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

export function Product({ id, image, name, description, price }) {
  return (
    <Container>
      <button id='favorite'>
        <img src='/src/assets/Heart.svg' alt='' />
      </button>
      <Link to={`/products/${id}`}>
        <img src={`${api.defaults.baseURL}/files/${image}`} alt='' className='link-image'/>
      </Link>
      <h2>{name}</h2>
      <p>{description}</p>
      <p id='value'>{`R$ ${price}`}</p>
      <div>
        <Stepper count='01'></Stepper>
        <Button title='incluir' />
      </div>
    </Container>
  )
}
