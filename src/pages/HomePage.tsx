import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/Login/loginSlice'
import type { RootState } from '../store'
import { Navigate } from 'react-router-dom'
const HomePage = () => {
  const { isLoggedin } = useSelector((store: RootState) => store.login)
  if (isLoggedin) {
    return <Navigate to={'/dashboard'} />
  }
  const dispatch = useDispatch()
  const handleLogin = () => {
    sessionStorage.setItem('login', JSON.stringify(true))
    dispatch(login())
  }
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  )
}
export default HomePage
