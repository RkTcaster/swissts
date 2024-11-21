import { Tournament } from '@/src/classes/Tournament'
import pageTitle from '@/src/components/Layout/PageTitle'
import RandomSeatStep from '@/src/views/Tornament'

export default pageTitle({ title: 'Random Seats', Component: RandomSeatStep })

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}