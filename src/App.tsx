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

const App = () => {
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
          path: 'courses',
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
