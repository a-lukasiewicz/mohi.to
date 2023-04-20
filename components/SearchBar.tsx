'use client'

import useDebounce from '@/src/hooks/useDebounce'
import fetchByTitle from '@/utils/fetchByTitle'
import { useEffect, useState } from 'react'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 500)

  const getImages = async (debouncedValue: string) => {
    const images = await fetchByTitle(debouncedValue)
    console.log(images)
  }

  useEffect(() => {
    if (!debouncedValue) return

    getImages(debouncedValue)
  }, [debouncedValue])

  return (
    <div className="w-full bg-blue-200 h-32 px-8 lg:px-32">
      <div className="flex justify-center py-8">
        <input
          type="text"
          onChange={event => setSearchValue(event.target.value)}
          placeholder="Search for image"
          className="w-full md:w-1/2 px-5 py-3 rounded outline-none"
        />
      </div>
    </div>
  )
}

export default SearchBar
