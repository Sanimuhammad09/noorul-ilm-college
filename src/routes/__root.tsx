import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const router = useRouterState();
  const isAdmin = router.location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Navbar />}
      <div className={!isAdmin ? "pt-20" : ""}>
        <Outlet />
      </div>
      {!isAdmin && <Footer />}
    </>
  )
}
