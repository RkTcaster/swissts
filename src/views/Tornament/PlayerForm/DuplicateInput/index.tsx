import Icon from '@/src/components/Icon'
import Input from '@/src/components/Input'
import css from './style.module.css'

//If this wokrs, we can delete PlayerInputField
type Props = {
  result: string
  index: number
  inputValue: string
  handlePlayerNameChange: ({ name, index }: { name: string; index: number }) => void
  removePlayer: (index: number) => void
}

const PlayerDuplicateInputField = ({ result, inputValue, index, handlePlayerNameChange, removePlayer }: Props) => {
  if ((result === 'duplicated')) {
    console.log("Entro al if")
    return (
      <div className='col-span-1 flex items-center justify-between gap-4' key={`${inputValue}${index}`}>
        <Input
          type='text'
          placeholder='Player name...'
          initialValue={inputValue}
          className={css.inputDuplicate}
          onBlur={(e) => {
            const newValue = e.target.value.trim()
            handlePlayerNameChange({ name: newValue, index })
          }}
        />
        <Icon
          name='Close'
          className={css.icon}
          onClick={() => {
            removePlayer(index)
          }}
        />
      </div>
    )
  } else {
    console.log("Entro al else")

    return (
      <div className='col-span-1 flex items-center justify-between gap-4' key={`${inputValue}${index}`}>
        <Input
          type='text'
          placeholder='Player name...'
          initialValue={inputValue}
          onBlur={(e) => {
            const newValue = e.target.value.trim()
            handlePlayerNameChange({ name: newValue, index })
          }}
        />
        <Icon
          name='Close'
          className={css.icon}
          onClick={() => {
            removePlayer(index)
          }}
        />
      </div>
    )
  }
}

export default PlayerDuplicateInputField
