import { Tournament } from '@/src/classes/Tournament'
import Select from '@/src/components/Select'
import { useTournament } from '@/src/context/tournament'


export default function RoundsPage() {

  const {tournament} = useTournament()

  tournament.createRound()
  
  const roundLenght = tournament.rounds.length -1
  const roundMatches = tournament.rounds[roundLenght].matches

  return (
        <>
         <div style={{ display: 'flex', gap: '12px' }}>
          {roundMatches.map((match,matchIndex) => {
            return (
            <div className='flex'><div>{match.player1.player.name} 
            <Select 
            index={matchIndex}
            key={match.player1.player.name}       
            /></div>
            <div>{match.player2.player.name}
            <Select 
            index={matchIndex}
            key={match.player2.player.name}          
            /></div>
            </div>)
          })}
          </div>     
    </>
  )
}
