import { useEffect } from 'react'
import ExamTips from '../components/ExamTips'
import Navbar from '../components/Navbar'
import { getAllAnnouncements } from '../features/Announcement/announcementSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import Announcements from '../components/Announcements'
import Quizes from '../components/Quizes'
import { getAllQuizes } from '../features/Quizes/QuizesSlice'

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getAllAnnouncements())
    dispatch(getAllQuizes())
  }, [])
  return (
    <section className=" bg-gray-200">
      <Navbar />
      <ExamTips />
      <article className="grid grid-cols-1 lg:grid-cols-5 m-4 gap-4 bg-gray-200">
        <Announcements />
        <Quizes />
      </article>
    </section>
  )
}
export default Dashboard
