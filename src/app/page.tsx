'use client'

import { Inter } from 'next/font/google'
import SearchBar from '@/src/components/SearchBar'
import ImageCard from '@/src/components/images/ImageCard'
import Pagination from '@/src/components/Pagination'
import { useGetImagesQuery } from '../redux/services/imageApi'
import { useAppSelector } from '../redux/hooks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const perPage = useAppSelector(state => state.pageReducer.resultAmount)

  const { isLoading, isFetching, data, error } = useGetImagesQuery({
    page: 1,
    resultAmount: perPage
  })

  return (
    <main>
      <SearchBar />
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
