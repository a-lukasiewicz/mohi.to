'use client'
import { Button } from '@/src/components/Buttons'
import Error from '@/src/components/layout/Error'
import Spinner from '@/src/components/layout/Spinner'
import shareImage from '@/src/helpers/shareImage'
import useLocalStorage from '@/src/hooks/useLocalStorage'
import { useGetImageByIdQuery } from '@/src/redux/services/imageApi'
import { LocalStorageKeys } from '@/src/types/types'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Home() {
  const [favoritesLocalStorage, setFavoritesLocalStorage] = useLocalStorage<
    string[]
  >(LocalStorageKeys.FAVORITES, [])

  const { id } = useParams()
  const [isFavorite, setIsFavorite] = useState(
    favoritesLocalStorage.includes(id)
  )

  const {
    isLoading,
    isFetching,
    data: image,
    error
  } = useGetImageByIdQuery({
    id
  })

  useEffect(() => {
    setIsFavorite(favoritesLocalStorage.includes(id))
  }, [id, favoritesLocalStorage])

  const addFavorite = () => {
    setFavoritesLocalStorage([...favoritesLocalStorage, id])
    toast.success('Photo added to favorites')
  }

  const removeFavorite = () => {
    const filteredData = favoritesLocalStorage.filter(fav => fav !== id)
    setFavoritesLocalStorage(filteredData)
    toast.success('Photo removed from favorites')
  }

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
    <div className="flex flex-col items-center justify-center py-8">
      <div className="my-8">
        {image && (
          <Image
            src={image?.src?.original}
            alt={image?.alt ?? image?.photographer}
            width={500}
            height={500}
            className="rounded hover:scale-[102%] hover:cursor-pointer transition"
          />
        )}
      </div>
      <h1>Photo id: {id}</h1>
      <Toaster />
      {image?.alt && <h1 className="text-2xl py-2">{image?.alt}</h1>}
      <div className="flex justify-center w-full px-4 my-4 lg:px-16">
        <Button
          text={!isFavorite ? 'Add to favorites' : 'Remove from favorites'}
          onClick={!isFavorite ? addFavorite : removeFavorite}
        />
        <Button text="Share image" onClick={() => shareImage({ id })} />
      </div>
    </div>
  )
}
