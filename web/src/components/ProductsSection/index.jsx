import { useState, useEffect, useRef } from 'react'
import { Product } from '../Product'
import { Container } from './styles'
import { motion, useMotionValue, useAnimate } from 'framer-motion'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/useAuth'

export function ProductsSection({ title, category, search }) {
  const [products, setProducts] = useState([])

  const carousel = useRef()
  const [inner, animate] = useAnimate()
  const x = useMotionValue(0)
  const [width, setWidth] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(
        `/products?search=${search}&category=${category}`
      )
      setProducts(response.data)
    }

    fetchProducts()
  }, [search])

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    const unsubscribeX = x.on('change', value => {
      setAtStart(value >= 0)
      setAtEnd(value <= -width)
    })

    return () => {
      window.removeEventListener('resize', updateWidth)
      unsubscribeX()
    }
  }, [width, x])

  const slideToNext = () => {
    if (!atEnd) {
      const potentialNewValue = x.get() - 500
      const newValue = potentialNewValue <= -width ? -width : potentialNewValue
      animate(
        inner.current,
        { x: newValue },
        { duration: 0.4, ease: 'easeInOut' }
      )
    }
  }

  const slideToPrev = () => {
    if (!atStart) {
      const potentialNewValue = x.get() + 500
      const newValue = potentialNewValue >= 0 ? 0 : potentialNewValue
      animate(
        inner.current,
        { x: newValue },
        { duration: 0.4, ease: 'easeInOut' }
      )
    }
  }

  return (
    <Container start={atStart.toString()} end={atEnd.toString()}>
      <h1>{title}</h1>
      <motion.div className='carousel' ref={carousel}>
        <motion.div
          ref={inner}
          className='inner'
          drag='x'
          style={{ x }}
          dragConstraints={{ right: 0, left: -width }}>
          {products &&
            products.map(product => (
              <motion.div className='product' key={product.id}>
                <Product
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              </motion.div>
            ))}
        </motion.div>
        <motion.button className='previous' onClick={slideToPrev}>
          <img src='/src/assets/CaretLeft.svg' alt='Botão para esquerda' />
        </motion.button>
        <motion.button className='next' onClick={slideToNext}>
          <img src='/src/assets/CaretRight.svg' alt='Botão para direita' />
        </motion.button>
      </motion.div>
    </Container>
  )
}
