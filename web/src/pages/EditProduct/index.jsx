import { Container, Form, Content } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BackButton } from '../../components/BackButton'
import { FileButton } from '../../components/FileButton'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { IngredientItem } from '../../components/IngredientItem'

export function EditProduct() {
  return (
    <Container>
      <Header />
      <Content>
        <BackButton title='voltar' to='/' />
        <Form>
          <h1 className='title'>Adicionar prato</h1>
          <FileButton id='file-button' label='Imagem do prato' />
          <Input
            label='Nome'
            placeholder='Ex.: Salada Ceasar'
            className='name'
          />
          <div className='category'>
            <label htmlFor='category'>Categoria</label>
            <select name='Categoria' id='category'>
              <option value='Refeição'>Refeição</option>
              <option value='Sobremesa'>Sobremesa</option>
              <option value='Bebida'>Bebida</option>
            </select>
          </div>
          <div className='ingredients'>
            <p>Ingredientes</p>
            <div className='ingredients-box'>
              <IngredientItem value='Pão Naan' />
              <IngredientItem isNew />
            </div>
          </div>
          <Input label='Preço' placeholder='R$ 00,00' className='price' />
          <div className='description'>
            <label htmlFor='description'>Descrição</label>
            <textarea
              name='Descrição'
              id='description'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'></textarea>
          </div>
          <div className='buttons'>
            <Button title='Excluir prato' secondary />
            <Button title='Salvar alterações' disabled />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  )
}
