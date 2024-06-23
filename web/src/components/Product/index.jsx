import { Container } from './styles'
import { Stepper } from '../Stepper'
import { Button } from '../Button'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { USER_ROLE } from '../../utils/roles'

export function Product({ id, image, name, description, price }) {
  const { user } = useAuth()

  return (
    <Container>
      {user.role === USER_ROLE.ADMIN ? (
        <button>
          <Link to={`/edit/${id}`}>
            <img src='/src/assets/Pencil.svg' alt='' />
          </Link>
        </button>
      ) : (
        <button>
          <img src='/src/assets/Heart.svg' alt='' />
        </button>
      )}
      <Link to={`/products/${id}`}>
        <img
          src={`${api.defaults.baseURL}/files/${image}`}
          alt=''
          className='link-image'
        />
      </Link>
      <h2>{name}</h2>
      <p className='description'>{description}</p>
      <p id='value'>{`R$ ${price}`}</p>
      <div>
        {user.role !== USER_ROLE.ADMIN && (
          <>
            <Stepper count='01'></Stepper>
            <Button title='incluir' />
          </>
        )}
      </div>
    </Container>
  )
}
