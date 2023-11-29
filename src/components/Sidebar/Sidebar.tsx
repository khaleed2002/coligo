import { NavLink } from 'react-router-dom'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa'
import { GrAnnounce } from 'react-icons/gr'
import { FaRegCalendarAlt } from 'react-icons/fa'
const Sidebar = () => {
  return (
    <div
      className="m-0 p-0 w-64 fixed h-full bg-cyan-700 text-white sidebar
     max-h-screen overflow-hidden
    "
    >
      <h2 className="w-full mx-auto py-8 text-center text-5xl tracking-wider ">
        Coligo
      </h2>
      <div className="flex flex-col h-full py-8">
        <NavLink to="/dashboard" className="nav-link" end>
          <FaHome className="sidebar-icon" />
          <h3 className="text-2xl capitalize">dashboard</h3>
        </NavLink>

        <NavLink to="schedule" className="nav-link">
          <FaRegCalendarAlt className="sidebar-icon" />
          <h3 className="text-2xl capitalize">schedule</h3>
        </NavLink>

        <NavLink to="courses" className="nav-link">
          <FaBook className="sidebar-icon" />
          <h3 className="text-2xl capitalize">courses</h3>
        </NavLink>

        <NavLink to="gradebook" className="nav-link">
          <FaGraduationCap className="sidebar-icon" />
          <h3 className="text-2xl capitalize">gradebook</h3>
        </NavLink>

        <NavLink to="performance" className="nav-link">
          <BsGraphUpArrow className="sidebar-icon" />
          <h3 className="text-2xl capitalize">performance</h3>
        </NavLink>

        <NavLink to="announcement" className="nav-link">
          <GrAnnounce className="sidebar-icon" />
          <h3 className="text-2xl capitalize">announcement</h3>
        </NavLink>
      </div>
    </div>
  )
}
export default Sidebar
