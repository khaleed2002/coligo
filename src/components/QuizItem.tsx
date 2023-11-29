import { GiSandsOfTime } from 'react-icons/gi'
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'

const QuizItem = (props: {
  _id: string
  last: boolean
  title: string
  course: string
  topic: string
  due_date: Date
  type: string
}) => {
  function padZero(num: number) {
    return num < 10 ? '0' + num : num
  }
  let day = padZero(props.due_date.getDate())
  let month = props.due_date.toLocaleString('default', { month: 'short' })
  let year = props.due_date.getFullYear()
  let hours = padZero(props.due_date.getHours() % 12 || 12) // 12-hour format
  let minutes = padZero(props.due_date.getMinutes())
  let ampm = props.due_date.getHours() >= 12 ? 'PM' : 'AM'

  let formattedDate = `${day} ${month} ${year} - ${hours}:${minutes} ${ampm}`
  return (
    <>
      <div className="p-4 pt-8">
        <div className="quiz-content flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {props.type === 'quiz' ? (
              <GiSandsOfTime className="text-cyan-700 w-8 h-8" />
            ) : (
              <MdOutlineAssignmentTurnedIn className="text-cyan-700 w-8 h-8" />
            )}
            <p className=" font-semibold text-md">{props.title}</p>
          </div>
          <p className="text-slate-500 text-sm">Course: {props.course}</p>
          <p className="text-slate-500 text-sm">Topic: {props.topic}</p>
          <p className="text-slate-500 text-sm">Due to: {formattedDate}</p>
          <button className=" capitalize text-md bg-white py-2 text-cyan-700 rounded-lg font-bold border border-cyan-700">
            {props.type === 'quiz' ? 'start quiz' : 'solve assignment'}
          </button>
        </div>
      </div>
      {props.last ? '' : <hr />}
    </>
  )
}
export default QuizItem
