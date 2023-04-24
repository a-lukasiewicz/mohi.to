'use client'

import { NoFavorites } from '@/src/components/Favorites'
import ImageCard from '@/src/components/images/ImageCard'
import useLocalStorage from '@/src/hooks/useLocalStorage'
import { useGetImagesByIdQuery } from '@/src/redux/services/imageApi'
import Image from 'next/image'
import { Toaster, toast } from 'react-hot-toast'

export default function Home() {
  const [favoritesLocalStorage, setFavoritesLocalStorage] = useLocalStorage<
    string[]
  >('favorites', [])

  const { data } = useGetImagesByIdQuery({
    ids: favoritesLocalStorage
  })

  const clearFavorites = () => {
    try {
      setFavoritesLocalStorage([])
      toast.success('Successfully removed all favorites')
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <Toaster />
      {!favoritesLocalStorage.length ? (
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
          {data && (
            <div className="imagesGrid">
              {data?.map((image, index) => {
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
        </div>
      )}
    </div>
  )
}
