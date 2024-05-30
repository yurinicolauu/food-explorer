import { Container } from './styles'

export function Ingredient({ editType, title, onClick, ...rest }) {
  return (
    <Container editType={editType} {...rest}>
      <input
        type='text'
        value={title}
        readOnly={!editType || editType === 'item'}></input>
      {editType && (
        <button
          type='button'
          onClick={onClick}
          className={
            !editType
              ? 'ingredient'
              : editType === 'addItem'
              ? 'add-ingredient'
              : 'delete-ingredient'
          }>
          {editType === 'addItem' ? (
            <img src='/src/assets/Plus.svg' alt='Adicionar novo ingrediente' />
          ) : editType === 'item' ? (
            <img src='/src/assets/Close.svg' alt='Deletar ingrediente' />
          ) : null}
        </button>
      )}
    </Container>
  )
}
