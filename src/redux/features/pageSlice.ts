import { createSlice } from '@reduxjs/toolkit'

type PageState = {
  currentPage: number
}

const initialState = {
  currentPage: 1
} as PageState

export const pageDetails = createSlice({
  name: 'pageDetails',
  initialState,
  reducers: {
    increment: state => {
      state.currentPage += 1
    },
    decrement: state => {
      state.currentPage -= 1
    }
  }
})

export const { increment, decrement } = pageDetails.actions
export default pageDetails.reducer
