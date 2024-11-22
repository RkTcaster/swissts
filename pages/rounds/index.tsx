import Button from '@/src/components/Button'
import Select from '@/src/components/Select'
import { useTournament } from '@/src/context/tournament'
import PlayerScoreDiv from '@/src/views/PlayerRound'
import { useRouter } from 'next/router'
import { useState } from 'react'

// type Props = { submitRound: () => void } ???

export default function RoundsPage() {
  const { tournament } = useTournament()
  const router = useRouter()

  tournament.createRound()

  const roundLenght = tournament.rounds.length - 1
  const roundMatches = tournament.rounds[roundLenght].matches

  const [matches, setValue] = useState(tournament.rounds[roundLenght].matches)

  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({})

  const handleSelectChange = (key: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const logValue = () => {
    Object.entries(roundMatches).forEach(([tournamentPlayerKey, match]) => {
      
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
    <>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          {roundMatches.map((match, matchIndex) => {
            return (
              <div style={{ display: 'grid', gap: '12px' }} className='flex' key={matchIndex}>
                <div>
                  {match.player1.player.name}
                  <Select
                    index={matchIndex}
                    key={match.player1.player.name}
                    onChange={(value) => handleSelectChange(`${match.player1.player.name}`, value)}
                  />
                </div>
                <div>
                  {match.player2.player.name}
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
        <div>
          <div>Tabla de posiciones</div>
          <PlayerScoreDiv players={tournament.players} />
        </div>
      </div>
      <Button label={'Get Next round'} onClick={() => (logValue(), router.push("./rounds"))} className='button-primary' />
    </>
  )
}
