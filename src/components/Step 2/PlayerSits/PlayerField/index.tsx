import { Tournament } from '@/classes/Tournament'
import Input from '@/components/Input'

type Props = {
  tournament: Tournament  
  handlePlayerNameChange: ({ tournament }: { tournament: Tournament }) => void
}

const PlayerSitField = ({ tournament, handlePlayerNameChange }: Props) => {
  return (
    tournament.players.map(players => {
      return console.log(players)
    })


    // <div className='col-span-6 flex items-center justify-between gap-4' key={`${inputValue}${index}`}>
      
    //   handlePlayerNameChange({ tournament:  })       
      
    // </div>
  )
}

export default PlayerSitField
