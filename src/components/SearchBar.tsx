'use client'

import useDebounce from '@/src/hooks/useDebounce'
import fetchByTitle from '@/src/utils/fetchByTitle'
import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { changeResultAmount } from '../redux/features/pageSlice'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 500)
  const perPage = useAppSelector(state => state.pageReducer.resultAmount)
  const dispatch = useAppDispatch()

  const getImages = async (debouncedValue: string, perPage: number) => {
    const images = await fetchByTitle(debouncedValue, perPage)
    console.log(images)
  }

  useEffect(() => {
    if (!debouncedValue) return

    getImages(debouncedValue, perPage)
  }, [debouncedValue, perPage])

  return (
    <div className="w-full bg-blue-200 py-4 px-8 lg:px-32">
      <div className="flex flex-col md:flex-row justify-center items-center py-8">
        <input
          type="text"
          onChange={event => setSearchValue(event.target.value)}
          placeholder="Search for image"
          className="w-full md:w-1/2 px-5 py-3 rounded outline-none"
        />
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
      </div>
    </div>
  )
}

export default SearchBar
