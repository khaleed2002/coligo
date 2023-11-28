import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedin: false,
}
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedin = true
    },
    logout: (state) => {
      state.isLoggedin = false
    },
  },
})
export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
