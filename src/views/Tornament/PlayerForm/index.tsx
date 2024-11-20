import { useState } from 'react'
import PlayerInputField from './Input'
import Button from '@/src/components/Button'
import PlayerDuplicateInputField from './DuplicateInput'


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

  const test = () => {    
   }
  
 


  return (
    <div className='grid grid-1 gap-4'>
      <div className='grid grid-1 gap-4'>
        {players.map((player, i) => {
          if (players.lastIndexOf(player)!==i || players.indexOf(player) !== players.lastIndexOf(player)) {
            
            return ( 
              <PlayerDuplicateInputField
              result="duplicated"
              key={`${player}${i}`}
              index={i}
              inputValue={player}
              handlePlayerNameChange={handlePlayerNameChange}
              removePlayer={removePlayer}
            />
            
            )
          } else  {
            var check = 0
            return ( 
              <PlayerDuplicateInputField
              result="simple"
              key={`${player}${i}`}
              index={i}
              inputValue={player}
              handlePlayerNameChange={handlePlayerNameChange}
              removePlayer={removePlayer}
            />
          )}
        })}

        <Button
          disabled={players.length > 7  }
          label={'Add Player'}
          onClick={handleAddPlayer}
          className='button-primary'
        />
      </div>
      <div className='grid grid-1 gap-4'>
        <Button
          label={'Start Tournament'}
          disabled={players.length < 2 || (new Set(players)).size !== players.length}
          onClick={() => {
            submitPlayers(players),
            test()
          }}
          className='button-secondary'
        />
        {/* <div>------------------------</div>
        {players.map((player, i) => (
          <div className='grid grid-cols-2 gap-4' key={`${player}${i}`}>
            {player}
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default PlayerForm
