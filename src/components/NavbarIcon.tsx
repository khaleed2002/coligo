const NavbarIcon = (props: {
  icon: React.ComponentType<{
    className: string
  }>
  number?: number
}) => {
  return (
    <button className=" relative">
      <p className=" absolute top-0 translate-x-4 w-6 h-6 rounded-full bg-cyan-700 text-white">
        {props.number}
      </p>
      <props.icon className="w-8 h-8 text-cyan-600" />
    </button>
  )
}
export default NavbarIcon
