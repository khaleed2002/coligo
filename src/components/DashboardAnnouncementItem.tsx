const DashboardAnnouncementItem = (props: {
  announcer: string
  announcer_photo: string
  course: string
  text: string
}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row lg:gap-0">
      <div className="announcer flex items-start gap-4 pb-2 md:pb-0 border-b-2 md:border-b-0 md:border-r-2 border-slate-300 md:mr-2">
        <div className=" rounded-full w-16 overflow-hidden h-fit flex flex-col md:flex-row flex-wrap items-center justify-center">
          <img
            src={props.announcer_photo}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <p className=" font-semibold ">
          {props.announcer}
          <br />
          <span className=" font-normal text-slate-400">{props.course}</span>
        </p>
      </div>
      <p className=" text-slate-500 ">{props.text}</p>
    </div>
  )
}
export default DashboardAnnouncementItem
