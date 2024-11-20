import Button from '@/components/Button'
import Card from '@/components/Card'
import { useTournament } from '@/context/tournament'

const OtherTabPage = () => {
  const { tournament } = useTournament()

  
  
  return (
    <section className='flex items-center justify-center mt-6 container text-[14px]'>
      <Card>
        <Button
          label={'Get Sits'}
          onClick={() => {
            tournament.createRound()
            console.log(tournament);
          }}
          className='button-secondary'
        />

        
      </Card>
    </section>
  )
}

export default OtherTabPage
