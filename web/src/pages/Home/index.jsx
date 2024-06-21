import { useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ProductsSection } from '../../components/ProductsSection'
import { Container, Hero, Content } from './styles'

export function Home() {
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Header onSearchChange={setSearch} className='header'/>
      <Content>
        <Hero>
          <img src='/src/assets/Hero.png' alt='' />
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </Hero>
        <ProductsSection
          title='Refeições'
          category='Refeição'
          search={search}
        />
        <ProductsSection
          title='Sobremesas'
          category='Sobremesa'
          search={search}
        />
        <ProductsSection title='Bebidas' category='Bebida' search={search} />
      </Content>
      <Footer />
    </Container>
  )
}
