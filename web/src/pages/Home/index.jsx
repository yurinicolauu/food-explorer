import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Hero, Content } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Hero>
          <img src='./src/assets/Hero.png' alt='' />
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </Hero>
        <Section title='Refeições'></Section>
        <Section title='Sobremesas'></Section>
        <Section title='Bebidas'></Section>
      </Content>
      <Footer />
    </Container>
  )
}
