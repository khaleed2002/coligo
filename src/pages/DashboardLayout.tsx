import { Outlet } from 'react-router-dom'
import requireAuth from '../HOC/requireAuth'

const DashboardLayout = () => {
  return (
    <div>
      <div>DashboardLayout</div>
      <Outlet />
    </div>
  )
}
export default requireAuth(DashboardLayout)
