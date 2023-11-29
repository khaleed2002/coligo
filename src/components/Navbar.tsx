import myImg from '../assets/me.jpg'
import { IoMdMail } from 'react-icons/io'
import { IoIosNotifications } from 'react-icons/io'

import NavbarIcon from '../components/NavbarIcon'
const Navbar = () => {
  return (
    <nav className="flex justify-between p-8 bg-white w-full flex-wrap gap-4">
      <h2 className="text-2xl text-gray-800 font-bold">Welcome Khaled,</h2>
      <div className="flex flex-row-reverse gap-x-6 flex-wrap">
        <button className=" rounded-full w-12 h-12 overflow-hidden">
          <img src={myImg} alt="" />
        </button>
        <NavbarIcon icon={IoMdMail} number={4} />
        <NavbarIcon icon={IoIosNotifications} number={1} />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="px-2 border-2 outline-none rounded-3xl"
        />
      </div>
    </nav>
  )
}
export default Navbar
