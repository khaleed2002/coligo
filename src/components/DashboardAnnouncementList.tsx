import DashboardAnnouncementItem from './DashboardAnnouncementItem'
import type { RootState } from '../store'
import { useSelector } from 'react-redux'
const DashboardAnnouncementList = () => {
  const { announcementsData } = useSelector(
    (store: RootState) => store.announcement
  )
  return (
    <div className="flex gap-8 p-8 flex-wrap">
      {announcementsData.map((item) => {
        return <DashboardAnnouncementItem key={item._id} {...item} />
      })}
    </div>
  )
}
export default DashboardAnnouncementList
