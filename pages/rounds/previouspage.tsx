import { Tournament } from '@/src/classes/Tournament'
import pageTitle from '@/src/components/Layout/PageTitle'
import RandomSeatStep from '@/src/views/Tornament'
//cambie esta pagina por el index que estoy usando ahora, no se bien cual es la diferencia
export default pageTitle({ title: 'Random Seats', Component: RandomSeatStep }) //Aca esta el random seats steps que no lo quiero

export async function getServerSideProps(context: any) {
  return {
    props: {}, 
    
    // will be passed to the page component as props
  }
  console.log("Entreo en la pagina ")
}

