import { Match } from '@/src/classes/Match'
import Button from '@/src/components/Button'
import { useTournament } from '@/src/context/tournament'
import PlayerScoreDiv from '@/src/views/PlayerRound'
import { useEffect, useState } from 'react'
import css from './styles.module.css'
import RoundInput from '../PlayerRound/Round'

const Second = () => {
  const { tournament } = useTournament()
  const [currentRoundsAmount, setCurrentRoundsAmount] = useState<number>(0)
  const [currentRoundMatches, setCurrentRoundMatches] = useState<Match[]>([])

  useEffect(() => {
    console.log('tournament.createRound()')
    tournament.createRound()
    setCurrentRoundsAmount(tournament.rounds.length - 1)
    setCurrentRoundMatches(tournament.rounds[currentRoundsAmount].matches)
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
      const player1SetWins = Number(selectedValues[match.player1.player.name]) || 0
      const player2SetWins = Number(selectedValues[match.player2.player.name]) || 0

      match.player1.player.setWins += player1SetWins
      match.player1.player.setLoss += player2SetWins
      match.player2.player.setWins += player2SetWins
      match.player2.player.setLoss += player1SetWins

      console.log(player1SetWins,player2SetWins)
      if (player1SetWins > player2SetWins) {
        console.log("entro player1 win")
        match.player1.player.wins += 1
        //Add match.player2.player.loss += 1
      } else if (player1SetWins < player2SetWins) {
        console.log("entro player2 win")
        match.player2.player.wins += 1
        //Add match.player1.player.loss += 1
      } else {
        //Add match.player1.player.draw += 1
        //Add match.player2.player.draw += 1
      }
    })
   // tournament.createRound()
    console.log(tournament)
    
  }

  return (
    <div className={css.container}>
      <div className={css.matches}>
      <RoundInput
      onSelectChange={handleSelectChange} 
      round={currentRoundsAmount}
      key={currentRoundsAmount}
      />
      </div>
      <PlayerScoreDiv containerClassName={css.scoreTableContainer} />
      <Button
        label={'Get Next round'}
        onClick={() => (logValue())}
        className='button-primary'
      />
    </div>
  )
}

export default Second