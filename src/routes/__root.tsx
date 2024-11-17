import Button from '@/components/Button'
import RouteErrorComponent from '@/components/RouteErrorComponent'
import { createRootRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const RootComponent = () => {
  const navigate = useNavigate()

  const handleTab = (tab: '/' | 'othertab') => {
    navigate({ to: `/${tab}` })
  }

  return (
    <>
      <Button label={'Example button nav'} onClick={() => handleTab('othertab')} />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: RouteErrorComponent,
})
