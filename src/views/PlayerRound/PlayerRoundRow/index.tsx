import classNames from 'classnames'
import css from './style.module.css'

//This is not arranged => also need to add loss and draws in the scores
type Props = {
  containerClassName?: string
  playerName: string
  playerWins: string | number
  playerSetWins: string | number
  playerSetLoss: string | number
}

const PlayerRoundRow = ({ containerClassName, playerName, playerWins, playerSetWins, playerSetLoss }: Props) => {
  return (
    <div className={classNames(css.container, containerClassName)}>
      <p className={css.playerName}>{playerName}</p>
      <p>{playerWins}</p>
      <p>{playerSetWins}</p>
      <p>{playerSetLoss}</p>
    </div>
  )
}

export default PlayerRoundRow
