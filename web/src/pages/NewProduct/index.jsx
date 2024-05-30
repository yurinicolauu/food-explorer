import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BackButton } from '../../components/BackButton'
import { FileButton } from '../../components/FileButton'
import { Input } from '../../components/Input'

export function NewProduct() {
  return (
    <Container>
      <Header />
      <BackButton title='voltar' />
      <Form>
        <h1>Adicionar prato</h1>
        <FileButton
          id='file-button'
          label='Imagem do prato'
        />
        <Input label='Nome' placeholder='Ex.: Salada Ceasar' />
        <div className='category'>
          <label htmlFor='category'>Categoria</label>
          <select name='Categoria' id='category'>
            <option value='Refeição'>Refeição</option>
            <option value='Sobremesa'>Sobremesa</option>
            <option value='Bebida'>Bebida</option>
          </select>
        </div>
        <Input label='Preço' placeholder='R$ 00,00' />
        <div className='description'></div>
        <label htmlFor='description'>Descrição</label>
        <textarea
          name='Descrição'
          id='description'
          placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'></textarea>
      </Form>
      <Footer />
    </Container>
  )
}
