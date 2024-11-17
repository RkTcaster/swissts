import Icon from '@/components/Icon'
import Input from '@/components/Input'

type Props = {
  index: number
  inputValue: string
  handlePlayerNameChange: ({ name, index }: { name: string; index: number }) => void
  removePlayer: (index: number) => void
}

const PlayerInputField = ({ inputValue, index, handlePlayerNameChange, removePlayer }: Props) => {
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
        className='h-[24px] delete-icon rounded-lg'
        onClick={() => {
          removePlayer(index)
        }}
      />
    </div>
  )
}

export default PlayerInputField
