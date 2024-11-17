import Card from '@/components/Card'
import PlayerForm from '@/components/Step1/PlayerForm'

const Home = () => {
  return (
    <section className='flex items-center justify-center mt-6 container'>
      <Card className='w-fit'>
        <PlayerForm />
      </Card>
    </section>
  )
}

export default Home
