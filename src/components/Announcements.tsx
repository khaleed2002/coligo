import DashboardAnnouncementList from '../components/DashboardAnnouncementList'
import AllButton from '../components/AllButton'

const Announcements = () => {
  return (
    <div className="announcements p-4 bg-white lg:col-span-4 rounded-lg">
      <header className="flex justify-between">
        <h3 className=" font-bold">Announcements</h3>
        <AllButton />
      </header>
      <DashboardAnnouncementList />
    </div>
  )
}
export default Announcements
