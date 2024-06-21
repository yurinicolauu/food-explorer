import { Container } from './styles'

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
      <button
        type='button'
        onClick={onClick}>
        {isNew ? (
          <img src='/src/assets/Plus.svg' alt='Adicionar novo ingrediente' />
        ) : (
          <img src='/src/assets/Close.svg' alt='Deletar ingrediente' />
        )}
      </button>
    </Container>
  )
}
