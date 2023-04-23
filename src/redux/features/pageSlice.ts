import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PageState = {
  currentPage: number
  resultAmount: number
}

const initialState = {
  currentPage: 1,
  resultAmount: 10
} as PageState

export const pageDetails = createSlice({
  name: 'pageDetails',
  initialState,
  reducers: {
    nextPage: state => {
      state.currentPage += 1
    },
    prevPage: state => {
      state.currentPage -= 1
    },
    resetPageNumber: state => {
      state.currentPage = 1
    },
    changeResultAmount: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      state.resultAmount = action.payload
    }
  }
})

export const { prevPage, nextPage, resetPageNumber, changeResultAmount } =
  pageDetails.actions
export default pageDetails.reducer
