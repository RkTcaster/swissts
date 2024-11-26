import { useTournament } from '@/src/context/tournament'
import MatchInput from '../Match'
import { useEffect, useState } from 'react'
import { Match } from '@/src/classes/Match'

type Props = {
  round: number
  onSelectChange: (key: string, value: string) => void
}

const RoundInput = ({ round, onSelectChange }: Props) => {
  const { tournament } = useTournament()   
  const [matches, setMatches] = useState<Match[]>([])
 
  useEffect(() => {
    setTimeout(() => {
      setMatches(tournament.rounds[round].matches)    
    })
  
})
  return (
    <>
      <div>
        <p>Ronda {`${round+1}`}</p>
      </div>
      <div>
        <MatchInput key={`round-${round}`} matches={matches} onSelectChange={onSelectChange} />
      </div>
    </>
  )
}

export default RoundInput
