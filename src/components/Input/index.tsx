import { twMerge } from 'tailwind-merge'
import './input.css'
import { useState } from 'react'

type Props = {
  initialValue?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ initialValue, className, onChange, onBlur, ...props }: Props) => {
  const [value, setValue] = useState(initialValue)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleOnChange', e.target.value)
    setValue(e.target.value)
    if (onChange) onChange(e)
  }

  return (
    <input onChange={handleOnChange} onBlur={onBlur} className={twMerge('input', className)} value={value} {...props} />
  )
}

export default Input
