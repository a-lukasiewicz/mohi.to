'use client'

import { Inter } from 'next/font/google'
import ImageCard from '@/src/components/images/ImageCard'
import Pagination from '@/src/components/Pagination'
import { useGetImagesQuery } from '../redux/services/imageApi'
import { useAppSelector } from '../redux/hooks'
import { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import SelectBar from '@/src/components/SelectBar'
import Spinner from '../components/Spinner'
import Error from '../components/Error'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 500)

  const perPage = useAppSelector(state => state.pageReducer.resultAmount)

  const { isLoading, isFetching, data, error, refetch } = useGetImagesQuery({
    page: 1,
    resultAmount: perPage,
    query: debouncedValue
  })

  useEffect(() => {
    refetch()
  }, [refetch, debouncedValue])

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return <Error />
  }

  return (
    <main>
      <div className="w-full bg-blue-200 py-4 px-8 lg:px-32">
        <div className="flex flex-col md:flex-row justify-center items-center py-8">
          <input
            type="text"
            onChange={event => setSearchValue(event.target.value)}
            placeholder="Search for image"
            className="w-full md:w-1/2 px-5 py-3 rounded outline-none"
          />
          <SelectBar />
        </div>
      </div>
      <div className="imagesGrid">
        {data?.photos?.map((image, index) => {
          return (
            <ImageCard
              id={image?.id}
              title={image?.alt}
              imageURL={image?.src.original}
              key={index}
            />
          )
        })}
      </div>
      <div className="flex justify-center py-8">
        <Pagination />
      </div>
    </main>
  )
}
