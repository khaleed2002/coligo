import { Outlet } from 'react-router-dom'
import requireAuth from '../HOC/requireAuth'
import Sidebar from '../components/Sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <main className="container max-w-full">
      <Sidebar />
      <div className="content ml-0 sm:ml-64">
        <Outlet />
      </div>
    </main>
  )
}
export default requireAuth(DashboardLayout)
