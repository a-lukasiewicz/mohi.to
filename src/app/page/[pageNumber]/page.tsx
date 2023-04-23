'use client'

import { Inter } from 'next/font/google'
import SearchBar from '@/src/components/SearchBar'
import ImageCard from '@/src/components/images/ImageCard'
import { useEffect, useState } from 'react'
import Pagination from '@/src/components/Pagination'
import { useGetImagesQuery } from '@/src/redux/services/imageApi'
import { useAppSelector } from '@/src/redux/hooks'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ params: pageNumber }: any) {
  const perPage = useAppSelector(state => state.pageReducer.resultAmount)
  const currentPage = useAppSelector(state => state.pageReducer.currentPage)

  const { isLoading, isFetching, data, error } = useGetImagesQuery({
    page: currentPage,
    resultAmount: perPage
  })

  return (
    <main>
      <SearchBar />
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
