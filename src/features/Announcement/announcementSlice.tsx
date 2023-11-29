import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
interface announcement {
  _id: string
  announcer: string
  announcer_photo: string
  course: string
  text: string
}
const initialState: {
  announcementsData: announcement[]
  isLoading: boolean
  error: string
} = {
  announcementsData: [],
  isLoading: false,
  error: '',
}

const announcementURL = 'https://coligo.cyclic.app/api/announcements'

export const getAllAnnouncements = createAsyncThunk(
  'announcement/getAllAnnouncements',
  async (_, thunkAPI) => {
    try {
      const response = await axios(announcementURL)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('There is something error')
    }
  }
)

const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAnnouncements.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false
        state.announcementsData = action.payload
      })
      .addCase(getAllAnnouncements.rejected, (state, action) => {
        state.isLoading = false
        state.error = String(action.payload)
      })
  },
})
export const {} = announcementSlice.actions
export default announcementSlice.reducer
