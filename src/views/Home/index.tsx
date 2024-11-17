import { Player } from '@/classes/Player'
import Card from '@/components/Card'
import { useState } from 'react'

const Home = () => {
  const [players, setPlayers] = useState<string[]>(['Player 1'])
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
  const handleAddPlayer = () => {
    setPlayers((prevPlayers) => {
      return [...prevPlayers, '']
    })
  }
  console.log(players)

  return (
    <section className='flex items-center justify-center mt-6 container text-[14px]'>
      <Card>
        {players.map((player, i) => {
          return (
            <input
              type='text'
              value={player}
              onChange={(e) => {
                handlePlayerNameChange({ name: e.target.value, index: i })
              }}
            />
          )
        })}
        <button onClick={handleAddPlayer}>Add Player</button>
      </Card>
    </section>
  )
}

export default Home
