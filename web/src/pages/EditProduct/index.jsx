import { useEffect, useState } from 'react'
import { Container, Form, Content } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BackButton } from '../../components/BackButton'
import { FileButton } from '../../components/FileButton'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { IngredientItem } from '../../components/IngredientItem'
import { api } from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'

export function EditProduct() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState()
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`)
        setProduct(response.data)
        setName(response.data.name)
        setCategory(response.data.category)
        setPrice(response.data.price)
        setDescription(response.data.description)
        if (response.data.ingredients) {
          const ingredientsName = response.data.ingredients.map(
            ingredient => ingredient.name
          )
          setIngredients(ingredientsName)
        }
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

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]
    if (file) {
      setImage(file)
    }
  }

  async function handleEditProduct() {
    if (
      !name ||
      ingredients.length === 0 ||
      !category ||
      !price ||
      !description
    ) {
      return alert('Preencha todos os campos!')
    }

    if (newIngredient) {
      return alert(
        'Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.'
      )
    }

    const formData = new FormData()
    if (image) {
      formData.append('image', image)
    }
    formData.append('name', name)
    formData.append('category', category)
    formData.append('ingredients', JSON.stringify(ingredients))
    formData.append('price', price)
    formData.append('description', description)

    await api.put(`/products/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    alert('Produto editado com sucesso!')
    navigate('/')
  }

  async function handleDeleteProduct() {
    await api.delete(`/products/${id}`)
    alert('Produto excluído com sucesso!')
    navigate('/')
  }

  return (
    <Container>
      <Header />
      <Content>
        <BackButton title='voltar' />
        <Form>
          <h1 className='title'>Editar prato</h1>
          <FileButton
            id='file-button'
            label='Imagem do prato'
            onChange={handleChangeImage}
          />
          <Input
            label='Nome'
            placeholder='Ex.: Salada Ceasar'
            className='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <div className='category'>
            <label htmlFor='category'>Categoria</label>
            <select
              name='Categoria'
              id='category'
              value={category}
              onChange={e => setCategory(e.target.value)}>
              <option value='Refeição'>Refeição</option>
              <option value='Sobremesa'>Sobremesa</option>
              <option value='Bebida'>Bebida</option>
            </select>
          </div>
          <div className='ingredients'>
            <p>Ingredientes</p>
            <div className='ingredients-box'>
              {ingredients.map((ingredient, index) => (
                <IngredientItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <IngredientItem
                isNew
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </div>
          <Input
            label='Preço'
            placeholder='R$ 00,00'
            className='price'
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <div className='description'>
            <label htmlFor='description'>Descrição</label>
            <textarea
              name='Descrição'
              id='description'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              value={description}
              onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <Button
            title='Salvar alterações'
            onClick={handleEditProduct}
            className='buttons'
          />
          <Button
            title='Excluir prato'
            secondary
            onClick={handleDeleteProduct}
            className='buttons'
          />
        </Form>
      </Content>
      <Footer />
    </Container>
  )
}
