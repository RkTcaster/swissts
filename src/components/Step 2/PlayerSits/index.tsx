import { useState } from 'react'
import PlayerField from './PlayerField'
import Button from '@/components/Button'
import { createRootRoute, Outlet, useNavigate } from '@tanstack/react-router'
import PlayerSitField from './PlayerField'
import { Tournament } from '@/classes/Tournament'

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

  //Test Navigate Supongo que esto lo puedo volver un elemento y juntarlo 

  const navigate = useNavigate()

  const handleTab = (tab: '/' | 'othertab') => {
    navigate({ to: `/${tab}` })}

  // return (
  //   // <div className='grid grid-1 gap-4'>
  //   //   <div className='grid grid-1 gap-4'>
  //   //     {players.map((player, i) => {
  //   //       return (
  //   //         <PlayerSitField
  //   //           tournament={Tournament}
  //   //         />
  //   //       )
  //   //     })}
  //   //   </div>
  //   // </div>
  // )
}

export default PlayerForm
