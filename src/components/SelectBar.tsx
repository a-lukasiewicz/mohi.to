'use client'

import useDebounce from '@/src/hooks/useDebounce'
import { useState } from 'react'
import { changeResultAmount } from '../redux/features/pageSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

const SelectBar = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-row justify-center items-center mt-4 md:mt-0">
      <h3 className="pl-4">Results per page:</h3>
      <select
        onChange={event =>
          dispatch(changeResultAmount(Number(event.target.value)))
        }
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
