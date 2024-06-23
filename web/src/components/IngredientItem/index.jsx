import { Container } from './styles'
import { Plus, Close } from '../../assets'

export function IngredientItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type='text'
        value={value}
        placeholder='Adicionar'
        readOnly={!isNew}
        {...rest}
      />
      <button type='button' onClick={onClick}>
        {isNew ? (
          <img src={Plus} alt='Adicionar novo ingrediente' />
        ) : (
          <img src={Close} alt='Deletar ingrediente' />
        )}
      </button>
    </Container>
  )
}
