import { useState } from 'react'
import PlayerInputField from './PlayerInputField'
import Button from '@/components/Button'
import { createRootRoute, Outlet, useNavigate } from '@tanstack/react-router'
import Icon from '@/components/Icon'

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

  const [divs, setDivs] = useState<JSX.Element[] | null>(null);

  const createDiv = (players: string[]) => {
    
    const generatedDivs = players.map((player, i) => (
      <div className="grid grid-cols-2 gap-4" key={`${player}${i}`}>
        {player}
      </div>
    ));
    setDivs(generatedDivs);
  };
  

  //Test Navigate Supongo que esto lo puedo volver un elemento y juntarlo 

  const navigate = useNavigate()

  const handleTab = (tab: '/' | 'othertab') => {
    navigate({ to: `/${tab}` })}

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

      </div>
      <div className='grid grid-1 gap-4'>
        <Button
          label={'Start Tournament'}
          onClick={() => createDiv(players)}
          className='button-secondary'
        />
        {divs && <div className="grid grid-cols-2 gap-4">{divs}</div>}
        </div>
    </div>
  )
}

export default PlayerForm
