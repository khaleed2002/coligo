import { useSelector } from 'react-redux'
import AllButton from '../components/AllButton'
import QuizItem from './QuizItem'
import { RootState } from '../store'

const Quizes = () => {
  const { quizesData, isLoading } = useSelector(
    (store: RootState) => store.quizes
  )

  return (
    <div className="grid gap-4 bg-gray-200 col-span-1 ">
      <div className="quizes p-4 bg-white rounded-lg">
        <header className="flex justify-between">
          <h3 className=" font-bold">What's due?</h3>
          <AllButton />
        </header>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="">
            {quizesData.map((item, index) => {
              if (index === quizesData.length - 1) {
                return (
                  <QuizItem
                    key={item._id}
                    {...item}
                    due_date={new Date(item.due_date)}
                    last={true}
                  />
                )
              }
              return (
                <QuizItem
                  key={item._id}
                  {...item}
                  due_date={new Date(item.due_date)}
                  last={false}
                />
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Quizes
