import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomePage,
  DashboardLayout,
  Dashboard,
  SchedulePage,
  CoursesPage,
  GradebookPage,
  PerformancePage,
  AnnouncementPage,
} from './pages/index'
import { useDispatch } from 'react-redux'
import { login } from './features/Login/loginSlice'
const App = () => {
  const dispatch = useDispatch()
  if (sessionStorage.getItem('login') === 'true') {
    dispatch(login())
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'schedule',
          element: <SchedulePage />,
        },
        {
          path: 'courses',
          element: <CoursesPage />,
        },
        {
          path: 'gradebook',
          element: <GradebookPage />,
        },
        {
          path: 'performance',
          element: <PerformancePage />,
        },
        {
          path: 'announcement',
          element: <AnnouncementPage />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}
export default App
