import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { Ingredient } from '../../components/Ingredient/index'
import { BackButton } from '../../components/BackButton'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
import { USER_ROLE } from '../../utils/roles'
import { useAuth } from '../../hooks/useAuth'

export function Product() {
  const { user } = useAuth()
  const [product, setProduct] = useState()
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`)
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Falha ao buscar produto:', error)
        setLoading(true)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!product) {
    return <div>Produto não encontrado</div>
  }

  return (
    <Container>
      <Header />
      <div className='back-button'>
        <BackButton title={'voltar'} />
      </div>
      <Content>
        <img src={`${api.defaults.baseURL}/files/${product.image}`} alt='' />
        <div className='details'>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className='ingredients'>
            {product.ingredients &&
              product.ingredients.map(ingredient => (
                <Ingredient title={ingredient.name} key={ingredient.id} />
              ))}
          </div>
          {user.role === USER_ROLE.ADMIN ? (
            <Button title={'Editar Prato'} to={`/edit/${id}`} />
          ) : (
            <div className='stepper'>
              <Stepper count={'01'} />
              <Button title={`incluir R$ ${product.price}`} />
            </div>
          )}
        </div>
      </Content>
      <Footer />
    </Container>
  )
}
