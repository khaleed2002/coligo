import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
interface quiz {
  _id: string
  title: string
  course: string
  topic: string
  due_date: string
  type: string
}
const initialState: {
  quizesData: quiz[]
  isLoading: boolean
  error: string
} = {
  quizesData: [],
  isLoading: false,
  error: '',
}

const QuizesURL = 'https://coligo.cyclic.app/api/quizzes'

export const getAllQuizes = createAsyncThunk(
  'quizes/getAllQuizes',
  async (_, thunkAPI) => {
    try {
      const response = await axios(QuizesURL)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('There is something error')
    }
  }
)

const QuizesSlice = createSlice({
  name: 'quizes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuizes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllQuizes.fulfilled, (state, action) => {
        state.isLoading = false
        state.quizesData = action.payload
      })
      .addCase(getAllQuizes.rejected, (state, action) => {
        state.isLoading = false
        state.error = String(action.payload)
      })
  },
})
export const {} = QuizesSlice.actions
export default QuizesSlice.reducer
