'use client'

import { useState } from 'react'
import { NoFavorites } from '@/components/Favorites'
import ImageCard from '@/components/ImageCard'
import { clearLocalStorage, getLocalStorageData } from '@/helpers/localStorage'
import getImageById from '@/utils/getImageById'

export default function Home() {
  const [images, setImages] = useState<Image[]>([])
  const allFavorites: string[] = getLocalStorageData('favorites')
  const arrayOfPromises = allFavorites.map(fav => getImageById(fav))

  Promise.all(arrayOfPromises).then(data => {
    setImages(data)
  })

  return (
    <div className="flex justify-center py-8">
      {!allFavorites.length ? (
        <NoFavorites />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => clearLocalStorage('favorites')}
            className="mainButton bg-gray-200 px-3 py-1 mr-3 w-72"
          >
            Clear all favorites
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