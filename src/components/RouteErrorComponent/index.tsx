import { ErrorComponentProps, useRouter } from '@tanstack/react-router'
import ErrorModal from '../Modal/ErrorModal'


const RouteErrorComponent = ({ error, reset }: ErrorComponentProps) => {
  const router = useRouter()

  const onRetry = async () => {
    await router.invalidate()
    reset()
  }

  return <ErrorModal error={error as Error} title={'Ups! Hubo un problema'} onRetry={onRetry} />
}

export default RouteErrorComponent
