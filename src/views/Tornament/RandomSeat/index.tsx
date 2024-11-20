import { useTournament } from '@/src/context/tournament'
import React from 'react'

type Props = {}

const RandomSeatStep = (props: Props) => {
  const { tournament } = useTournament()

  const randomPlayers = tournament.players.map((player) => {
    return { player, random: Math.random() }
  }).sort((a, b) => a.random - b.random).map((player) => player.player)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
      {randomPlayers.map((player, index) => {
        return (
          <select key={index}>
            {tournament.players.map((playerOption, optionIndex) => {
              return (
                <option key={optionIndex} value={playerOption.name} selected={playerOption === player}>
                  {playerOption.name}
                </option>
              )
            })}
          </select>
        )
      })}
    </div>
  )
}

export default RandomSeatStep
