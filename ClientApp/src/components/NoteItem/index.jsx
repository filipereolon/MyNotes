import {FiPlus, FiX} from 'react-icons/fi'
import { Container } from './styles'

export function NoteItem({ isNew, value, onCLick, ...rest }){
  return (
    <Container isNew={isNew}>
      <input type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
        type='button'
        onClick={onCLick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}