import { useState } from 'react'
import { Container, Form, Content } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BackButton } from '../../components/BackButton'
import { FileButton } from '../../components/FileButton'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { IngredientItem } from '../../components/IngredientItem'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function NewProduct() {
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

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
    setImage(file)
  }

  const navigate = useNavigate()

  async function handleNewProduct() {
    if (
      !name ||
      ingredients.length === 0 ||
      !image ||
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
    formData.append('image', image)
    formData.append('name', name)
    formData.append('category', category)
    formData.append('ingredients', JSON.stringify(ingredients))
    formData.append('price', price)
    formData.append('description', description)

    await api.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    alert('Produto criado com sucesso!')
    navigate('/')
  }

  return (
    <Container>
      <Header />
      <Content>
        <BackButton title='voltar' to='/' />
        <Form>
          <h1 className='title'>Adicionar prato</h1>
          <FileButton
            id='file-button'
            label='Imagem do prato'
            onChange={handleChangeImage}
          />
          <Input
            label='Nome'
            placeholder='Ex.: Salada Ceasar'
            className='name'
            onChange={e => setName(e.target.value)}
          />
          <div className='category'>
            <label htmlFor='category'>Categoria</label>
            <select
              name='Categoria'
              id='category'
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
            onChange={e => setPrice(e.target.value)}
          />
          <div className='description'>
            <label htmlFor='description'>Descrição</label>
            <textarea
              name='Descrição'
              id='description'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <Button title='Salvar alterações' onClick={handleNewProduct} />
        </Form>
      </Content>
      <Footer />
    </Container>
  )
}
