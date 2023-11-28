import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogedin: false,
}
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogedin = true
    },
    logout: (state) => {
      state.isLogedin = false
    },
  },
})
export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
