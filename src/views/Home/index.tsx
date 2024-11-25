import { useTournament } from '@/src/context/tournament'
import PlayerForm from '../Tornament/PlayerForm'
import { useRouter } from 'next/router'

const Home = () => {
  const { tournament } = useTournament()
  const router = useRouter()

  const submitPlayers = (players: string[]) => {
    const date = '2016-07-19T20:23:01.804Z'
    tournament.startTournament({ playersNames: players, date: date })
    console.log('Start Tournament: ', tournament)
  }

  return (
    <>
      <PlayerForm submitPlayers={submitPlayers} />
    </>
  )
}

export default Home
