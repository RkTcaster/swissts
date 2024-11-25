import { useTournament } from '@/src/context/tournament'
import classNames from 'classnames'
import css from './style.module.css'
import PlayerRoundRow from './PlayerRoundRow'

type Props = {
  containerClassName?: string
}

const WINS_WEIGHT = 100
const GAMES_WEIGHT = 10

const PlayerScoreDiv = ({ containerClassName }: Props) => {
  const { tournament } = useTournament()
  const { players } = tournament

  const sortedPlayers = [...players.sort((a, b) => {
    const aScore = a.wins * WINS_WEIGHT + a.setWins * GAMES_WEIGHT - a.setLoss * GAMES_WEIGHT
    const bScore = b.wins * WINS_WEIGHT + b.setWins * GAMES_WEIGHT - b.setLoss * GAMES_WEIGHT
    return bScore - aScore
  })]

  return (
    <div className={classNames(containerClassName, css.container)}>
      <h3 className={css.title}>Tabla de posiciones</h3>
      <>
        <PlayerRoundRow
          containerClassName={classNames(css.playerRowContainer, css.playerRowHeader)}
          playerName={'Player Name'}
          playerWins={'Wins'}
          playerSetWins={'Game Wins'}
          playerSetLoss={'Game Losses'}
        />
        {sortedPlayers.map((player, playerIndex) => {
          const { name, wins, setWins, setLoss } = player
          return (
            <PlayerRoundRow
              containerClassName={css.playerRowContainer}
              key={playerIndex}
              playerName={name}
              playerSetLoss={setLoss}
              playerSetWins={setWins}
              playerWins={wins}
            />
          )
        })}
      </>
    </div>
  )
}

export default PlayerScoreDiv
