import { useTournament } from '@/src/context/tournament'
import React, { useState } from 'react'

type Props = { players: string[] }

const RandomSeatStep = ({ players }: Props) => {
  const randomPlayers = players
    .map((player) => {
      return { player, random: Math.random() }
    })
    .sort((a, b) => a.random - b.random)
    .map((player) => player.player)
 
    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked)
    }

  return (
    <div>
    <div style={{ display: 'flex', gap: '12px' }}>
    <input 
    type="checkbox" 
    checked={isChecked}     
    onChange={handleCheckboxChange}
    />
    <div>Modificar Posiciones</div>
  </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
      
      {randomPlayers.map((player, index) => {
        return (
          <select key={index} disabled={!isChecked}>
            {players.map((playerOption, optionIndex) => {
              return (
                <option key={optionIndex} value={playerOption} selected={playerOption === player}>
                  {playerOption}
                </option>
              )
            })}
          </select>
        )
      })}
    </div>
    </div>
  )
}

export default RandomSeatStep
