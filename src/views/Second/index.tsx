import { Match } from '@/src/classes/Match'
import Button from '@/src/components/Button'
import { useTournament } from '@/src/context/tournament'
import PlayerScoreDiv from '@/src/views/PlayerRound'
import { useEffect, useState } from 'react'
import css from './styles.module.css'
import RoundInput from '../PlayerRound/Round'

const Second = () => {
  const { tournament } = useTournament()

  const [visibleRounds, setVisibleRounds] = useState<number[]>([])
  const [currentRoundMatches, setCurrentRoundMatches] = useState<Match[]>([])

  useEffect(() => {
    console.log('tournament.createRound()')
    tournament.createRound()
    setVisibleRounds([0])
    setCurrentRoundMatches(tournament.rounds[0].matches)
  }, [])

  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({})

  const handleSelectChange = (key: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const logValue = () => {
    Object.entries(currentRoundMatches).forEach(([tournamentPlayerKey, match]) => {
      const player1GameWins = Number(selectedValues[match.player1.player.name]) || 0
      const player2GameWins = Number(selectedValues[match.player2.player.name]) || 0

      match.player1.player.gameWins += player1GameWins
      match.player1.player.gameLoss += player2GameWins
      match.player2.player.gameWins += player2GameWins
      match.player2.player.gameLoss += player1GameWins

     match.evaluateMatchWinner({player1GameWins:player1GameWins,player2GameWins:player2GameWins}) 

      // if (player1GameWins > player2GameWins) { //All moved to match
      //   match.player1.player.wins += 1
      //   match.player2.player.loss += 1
      // } else if (player1GameWins < player2GameWins) {
      //   match.player2.player.wins += 1
      //   match.player1.player.loss += 1
      // } else {
      //   match.player1.player.draws += 1
      //   match.player2.player.draws += 1
      // }
    })
    tournament.createRound()
    const nextRoundIndex = tournament.rounds.length - 1
    setVisibleRounds((prev) => [...prev, nextRoundIndex])
    setCurrentRoundMatches(tournament.rounds[nextRoundIndex].matches)
  }

  return (
    <div className={css.container}>
      <div className={css.matches}>
        {visibleRounds.map((round) => (
          <RoundInput key={round} onSelectChange={handleSelectChange} round={round} />
        ))}
      </div>
      <PlayerScoreDiv containerClassName={css.scoreTableContainer} />
      <Button label={'Get Next round'} onClick={() => logValue()} className='button-primary' />
    </div>
  )
}

export default Second
