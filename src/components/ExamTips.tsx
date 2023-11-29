import dashboardImg from '../assets/dashboardImg.svg'

const ExamTips = () => {
  return (
    <article className="grid sm:grid-cols-3 overflow-hidden bg-white rounded-xl m-4">
      <div className="tips sm:col-span-2 p-8 flex flex-col gap-y-4">
        <h2 className="exam-time text-3xl sm:text-5xl font-bold">Exams Time</h2>
        <p className=" text-slate-800">
          Here we are, Are you ready to fight? Don't worry, we prepared some
          tips to be ready for your exams.
        </p>
        <blockquote className=" italic text-slate-500">
          "Nothing happens untill something moves" - Albert Einstein
        </blockquote>
        <button className=" px-8 py-2 bg-emerald-400 w-fit rounded-lg text-white font-medium tracking-wide ">
          View exam tips
        </button>
      </div>
      <div className="flex align-middle">
        <img src={dashboardImg} alt="" className="hidden lg:block" />
      </div>
    </article>
  )
}
export default ExamTips
