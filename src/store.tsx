import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/Login/loginSlice'
import announcementReducer from './features/Announcement/announcementSlice'
import QuizesReducer from './features/Quizes/QuizesSlice'
export const store = configureStore({
  reducer: {
    login: loginReducer,
    announcement: announcementReducer,
    quizes:QuizesReducer
  },
  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
