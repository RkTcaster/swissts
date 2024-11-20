import { Player } from '@/src/classes/Player'
import { useTournament } from '@/src/context/tournament'
import React from 'react'

type Props = {}

const RandomSeatStep = (props: Props) => {
  const [players, setPlayers] = React.useState<Player[]>([])
  const { tournament } = useTournament()

  return (
    <div>
      <button onClick={() => setPlayers(tournament.players)}>click me</button>
      {players.map((player, index) => {
        return <div key={index}>{player.name}</div>
      })}
    </div>
  )
}

export default RandomSeatStep
