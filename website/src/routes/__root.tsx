import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  ),
})
