import Button from '@/components/Button'
import Card from '@/components/Card'
import { useTournament } from '@/context/tournament'

const OtherTabPage = () => {
  const { tournament } = useTournament()

  
  
  return (
    <section className='flex items-center justify-center mt-6 container text-[14px]'>
      <Card>
        <div className='flex flex-col gap-4'>this is another page</div>

        <Button
          label={'Start Tournament'}
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
