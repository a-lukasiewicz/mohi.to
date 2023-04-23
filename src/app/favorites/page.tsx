'use client'

import { useState } from 'react'
import { NoFavorites } from '@/src/components/Favorites'
import ImageCard from '@/src/components/images/ImageCard'
import {
  clearLocalStorage,
  getLocalStorageData
} from '@/src/helpers/localStorage'
import getImageById from '@/src/utils/getImageById'
import { Toaster, toast } from 'react-hot-toast'
import { LocalStorageKeys } from '@/src/types/types'
import Image from 'next/image'

export default function Home() {
  const [images, setImages] = useState<Image[]>([])
  const allFavorites: string[] = getLocalStorageData(LocalStorageKeys.FAVORITES)
  const arrayOfPromises = allFavorites.map(fav => getImageById(fav))

  Promise.all(arrayOfPromises).then(data => {
    setImages(data)
  })

  const clearFavorites = () => {
    try {
      clearLocalStorage(LocalStorageKeys.FAVORITES)
      toast.success('Successfully removed all favorites')
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <Toaster />
      {!allFavorites.length ? (
        <NoFavorites />
      ) : (
        <div className="flex flex-col justify-center items-center mt-4">
          <button
            onClick={clearFavorites}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
            type="button"
          >
            <span className="text-sm font-medium">Clear all favorites</span>
            <Image
              src="/trash.svg"
              alt="Trash"
              width={50}
              height={50}
              className="h-5 w-5"
            />
          </button>
          <div className="grid grid-cols-1 grid-flow-row place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white px-4 lg:px-16 py-8">
            {images?.map((image, index) => {
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
        </div>
      )}
    </div>
  )
}

{
}
