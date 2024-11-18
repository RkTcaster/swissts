import Card from '@/components/Card'
import PlayerForm from '@/components/Step1/PlayerForm'
import { useTournament } from '@/context/tournament'

const Home = () => {
  const { tournament } = useTournament()
  const submitPlayers = (players: string[]) => {
    const date = '2016-07-19T20:23:01.804Z'
    tournament.startTournament({ playersNames: players, date: date })
    console.log(tournament);
  }
  

  return (
    <section className='flex items-center justify-center mt-6 container'>
      <Card className='w-fit'>
        <PlayerForm submitPlayers={submitPlayers} />        
      </Card>
    </section>
  )
}

export default Home
