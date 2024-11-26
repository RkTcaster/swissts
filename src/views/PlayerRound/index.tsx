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
    const aScore = a.wins * WINS_WEIGHT + a.gameWins * GAMES_WEIGHT - a.gameLoss * GAMES_WEIGHT
    const bScore = b.wins * WINS_WEIGHT + b.gameWins * GAMES_WEIGHT - b.gameLoss * GAMES_WEIGHT
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
          playerLoss={"Loss"}
          playerDraws={"Draws"}
          playerSetWins={'Game Wins'}
          playerSetLoss={'Game Losses'}
        />
        {sortedPlayers.map((player, playerIndex) => {
          const { name, wins, loss,draws, gameWins, gameLoss } = player
          return (
            <PlayerRoundRow
              containerClassName={css.playerRowContainer}
              key={playerIndex}
              playerName={name}
              playerWins={wins}
              playerLoss={loss}
              playerDraws={draws}
              playerSetWins={gameWins}
              playerSetLoss={gameLoss}
            />
          )
        })}
      </>
    </div>
  )
}

export default PlayerScoreDiv
