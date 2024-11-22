import Button from '@/src/components/Button'
import Select from '@/src/components/Select'
import { useTournament } from '@/src/context/tournament'
import PlayerScoreDiv from '@/src/views/PlayerRound'
import { useState } from 'react'

// type Props = { submitRound: () => void } ???

export default function RoundsPage() {
  const { tournament } = useTournament()

  tournament.createRound()

  const roundLenght = tournament.rounds.length - 1
  const roundMatches = tournament.rounds[roundLenght].matches

  const [matches, setValue] = useState(tournament.rounds[roundLenght].matches)

  function logValue() {
    console.log(matches)
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          {roundMatches.map((match, matchIndex) => {
            return (
              <div className='flex'>
                <div>
                  {match.player1.player.name}
                  <Select index={matchIndex} key={match.player1.player.name} />
                </div>
                <div>
                  {match.player2.player.name}
                  <Select index={matchIndex} key={match.player2.player.name} />
                </div>
              </div>
            )
          })}
        </div>
        <Button label={'Get Next round'} onClick={logValue} className='button-primary' />
        <div>
          <div>Tabla de posiciones</div>
          <PlayerScoreDiv 
          players={tournament.players}
          />
         


          {/* {tournament.players.map((player,playerIndex) => {
            return (<div style={{ display: 'flex', gap: '12px' }}>
              <div>{player.name}</div> <div>{player.wins}-{player.setWins}-{player.setLoss}</div>
              </div>)
          }
          )} */}
        </div>
      </div>
    </>
  )
}
