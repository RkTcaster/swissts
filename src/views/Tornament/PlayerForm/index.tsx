import { useState } from 'react'
import Button from '@/src/components/Button'
import PlayerDuplicateInputField from './DuplicateInput'
import { useRouter } from 'next/router'
import RandomSeatStep from '../RandomSeat'

type Props = { submitPlayers: (players: string[]) => void }

const PlayerForm = ({ submitPlayers }: Props) => {
  // const router = useRouter()
  const [players, setPlayers] = useState<string[]>(['', ''])
  const [showRandomSeatStep, setShowRandomSeatStep] = useState(false)

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

  const handleStartTournament = () => {
    if (players.length >= 2 && new Set(players).size === players.length){
      console.log("Entro start Tournament Handler")
      setShowRandomSeatStep(true)
    }
  }

  return (
    <div className='grid grid-1 gap-4'>
      <div className='grid grid-1 gap-4'>
        {players.map((player, i) => {
          if (players.lastIndexOf(player) !== i || players.indexOf(player) !== players.lastIndexOf(player)) {
            return (
              <PlayerDuplicateInputField
                result='duplicated'
                key={`${player}${i}`}
                index={i}
                inputValue={player}
                handlePlayerNameChange={handlePlayerNameChange}
                removePlayer={removePlayer}
              />
            )
          } else {
            return (
              <PlayerDuplicateInputField
                result='simple'
                key={`${player}${i}`}
                index={i}
                inputValue={player}
                handlePlayerNameChange={handlePlayerNameChange}
                removePlayer={removePlayer}
              />
            )
          }
        })}

        <Button
          disabled={players.length > 7}
          label={'Add Player'}
          onClick={handleAddPlayer}
          className='button-primary'
        />
      </div>
      <div className='grid grid-1 gap-4'>
        <Button
          label={'Get draft positions'}
          disabled={players.length < 2 || new Set(players).size !== players.length}
          onClick={handleStartTournament}
          className='button-secondary'
        />        
        {/* Esto esta mal, pero no se como hacerlo */}
        {showRandomSeatStep && <RandomSeatStep players= {players} />} 

      </div>
    </div>
  )
}

export default PlayerForm
