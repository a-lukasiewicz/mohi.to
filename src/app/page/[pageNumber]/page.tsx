'use client'

import ImageCard from '@/src/components/images/ImageCard'
import Pagination from '@/src/components/Pagination'
import { useGetImagesQuery } from '@/src/redux/services/imageApi'
import { useAppSelector } from '@/src/redux/hooks'
import SelectBar from '@/src/components/SelectBar'
import Spinner from '@/src/components/layout/Spinner'
import Error from '@/src/components/layout/Error'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  const { resultAmount: perPage, currentPage } = useAppSelector(
    state => state.pageReducer
  )

  const { isLoading, isFetching, data, error } = useGetImagesQuery({
    page: currentPage,
    resultAmount: perPage,
    query: ''
  })

  if (error) {
    return <Error />
  }

  return (
    <main>
      <div className="w-full bg-blue-200 py-4 px-8 lg:px-32">
        <div className="flex flex-col md:flex-row justify-center items-center"></div>
        <SelectBar />
      </div>
      {isLoading || isFetching ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="imagesGrid">
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
      )}
      <div className="flex justify-center py-8">
        <Pagination />
      </div>
      <Toaster />
    </main>
  )
}
