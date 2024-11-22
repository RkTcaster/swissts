import { ChangeEvent, ReactNode, useEffect } from 'react'
import classNames from 'classnames'
import css from './select.module.css'

type Props = {
  index: number
  onChange: (value: string, index: number) => void
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange">

const Select = ({ index, onChange, className, ...props }: Props) => {
  const selectOption = [0,1,2]

  return (
    <select onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value, index)} className={classNames(css.select, className)} {...props} key={index}>
      {
        selectOption.map((playerOption, optionIndex) => {
          return (
            <option key={optionIndex} value={playerOption} defaultValue={playerOption === selectOption[0] ? playerOption:undefined}>
               {playerOption}
              </option>
          )
        })
      }

    </select>
  )
}

export default Select
