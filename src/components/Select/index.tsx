import { ReactNode } from 'react'
import classNames from 'classnames'
import css from './select.module.css'

type Props = {
  index: number
} & React.SelectHTMLAttributes<HTMLSelectElement>

const Select = ({ index, className, ...props }: Props) => {
  const selectOption = [0,1,2]
  return (
    <select className={classNames(css.select, className)} {...props} key={index}>
      {
        selectOption.map((playerOption, optionIndex) => {
          return (
            <option key={optionIndex} value={playerOption} selected={playerOption === 0}>
               {playerOption}
              </option>
          )
        })
      }

    </select>
  )
}

export default Select
