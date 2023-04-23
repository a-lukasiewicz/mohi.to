'use client'

import ImageCard from '@/src/components/images/ImageCard'
import Pagination from '@/src/components/Pagination'
import { useGetImagesQuery } from '@/src/redux/services/imageApi'
import { useAppSelector } from '@/src/redux/hooks'
import SelectBar from '@/src/components/SelectBar'
import Spinner from '@/src/components/Spinner'
import Error from '@/src/components/Error'

export default function Home() {
  const perPage = useAppSelector(state => state.pageReducer.resultAmount)
  const currentPage = useAppSelector(state => state.pageReducer.currentPage)

  const { isLoading, isFetching, data, error } = useGetImagesQuery({
    page: currentPage,
    resultAmount: perPage,
    query: ''
  })

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
        <div className="flex flex-col md:flex-row justify-center items-center"></div>
        <SelectBar />
      </div>
      <div className="grid grid-cols-1 grid-flow-row place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white px-4 lg:px-16 py-8">
        {data?.photos.map((image, index) => {
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
