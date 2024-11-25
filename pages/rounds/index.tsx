import { Match } from '@/src/classes/Match'
import Button from '@/src/components/Button'
import Select from '@/src/components/Select'
import { useTournament } from '@/src/context/tournament'
import PlayerScoreDiv from '@/src/views/PlayerRound'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import css from './styles.module.css'

// type Props = { submitRound: () => void } ???

export default function RoundsPage() {
  const { tournament } = useTournament()
  const router = useRouter()
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
      match.player1.player.setWins += Number(selectedValues[match.player1.player.name])
      match.player1.player.setLoss += Number(selectedValues[match.player2.player.name])
      match.player2.player.setWins += Number(selectedValues[match.player2.player.name])
      match.player2.player.setLoss += Number(selectedValues[match.player1.player.name])
      if (Number(selectedValues[match.player1.player.name]) > Number(selectedValues[match.player2.player.name])) {
        console.log('gano jugador 1')
        match.player1.player.wins += 1
      } else if (
        Number(selectedValues[match.player1.player.name]) < Number(selectedValues[match.player2.player.name])
      ) {
        console.log('gano jugador 2')
        match.player2.player.wins += 1
      } else {
        console.log('Empate')
      }
    })
    console.log(tournament)
  }

  return (
    <div className={css.container}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          {currentRoundMatches.map((match, matchIndex) => {
            return (
              <div style={{ display: 'grid', gap: '12px' }} className='flex' key={matchIndex}>
                <div>
                  <p className={css.selectLabel}>{match.player1.player.name}</p>
                  <Select
                    index={matchIndex}
                    key={match.player1.player.name}
                    onChange={(value) => handleSelectChange(`${match.player1.player.name}`, value)}
                  />
                </div>
                <div>
                  <p className={css.selectLabel}>{match.player2.player.name}</p>
                  <Select
                    index={matchIndex}
                    key={match.player2.player.name}
                    onChange={(value) => handleSelectChange(`${match.player2.player.name}`, value)}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <PlayerScoreDiv containerClassName={css.scoreTableContainer} />
      <Button
        label={'Get Next round'}
        onClick={() => (logValue(), router.push('./rounds'))}
        className='button-primary'
      />
    </div>
  )
}
