import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { Navigate } from 'react-router-dom'
import { ComponentType } from 'react'

const requireAuth = <P extends Object>(
  Dashboard: ComponentType<P>
): React.FC<P> => {
  const RequireAuth: React.FC<P> = (props) => {
    const { isLoggedin } = useSelector((store: RootState) => store.login)
    if (isLoggedin) {
      return <Dashboard {...props} />
    } else {
      return <Navigate to={'/'} />
    }
  }
  return RequireAuth
}
export default requireAuth
