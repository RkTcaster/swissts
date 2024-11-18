import { useState } from 'react'
import PlayerInputField from './PlayerInputField'
import Button from '@/components/Button'

type Props = { submitPlayers: (players: string[]) => void }

const PlayerForm = ({ submitPlayers }: Props) => {
  const [players, setPlayers] = useState<string[]>(['', ''])

  const handlePlayerNameChange = ({ name, index }: { name: string; index: number }) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player, playerIndex) => {
        if (playerIndex === index) {
          return name
        }
        return player
      })
    })
  }

  const removePlayer = (index: number) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.filter((_, playerIndex) => playerIndex !== index)
    })
  }

  const handleAddPlayer = () => {
    setPlayers((prevPlayers) => {
      return [...prevPlayers, '']
    })
  }

  return (
    <div className='grid grid-1 gap-4'>
      <div className='grid grid-1 gap-4'>
        {players.map((player, i) => {
          return (
            <PlayerInputField
              key={`${player}${i}`}
              index={i}
              inputValue={player}
              handlePlayerNameChange={handlePlayerNameChange}
              removePlayer={removePlayer}
            />
          )
        })}

        <Button
          disabled={players.length > 7}
          label={'Add Player'}
          onClick={handleAddPlayer}
          className='button-primary'
        />
        <Button
          label={'Start Tournament'}
          onClick={() => {
            submitPlayers(players)
          }}
          className='button-secondary'
        />
      </div>
    </div>
  )
}

export default PlayerForm
