'use client'

import { ChangeEvent } from 'react'
import { changeResultAmount } from '../redux/features/pageSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toast } from 'react-hot-toast'

const SelectBar = () => {
  const perPage = useAppSelector(state => state.pageReducer.resultAmount)
  const dispatch = useAppDispatch()

  const onChangeMethod = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeResultAmount(Number(event.target.value)))
    toast.success(`Fetched ${event.target.value} images`)
  }

  return (
    <div className="flex flex-row justify-center items-center mt-4 md:mt-0">
      <h3 className="pl-4">Results per page:</h3>
      <select
        defaultValue={perPage}
        onChange={event => onChangeMethod(event)}
        className="ml-4 mr-8 w-24 lg:w-40 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none"
      >
        <option>10</option>
        <option>30</option>
        <option>50</option>
      </select>
    </div>
  )
}

export default SelectBar
