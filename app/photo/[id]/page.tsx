'use client'
import { setLocalStorage } from '@/helpers/localStorage'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const [image, setImage] = useState<Image | null>(null)
  const { id } = useParams()

  const getImageById = async (id: string) => {
    const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
      method: 'GET',
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY ?? '',
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    setImage(data)
  }

  useEffect(() => {
    getImageById(id)
  }, [id])

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1>Photo page: {id}</h1>
      <div className="my-8">
        {image && (
          <Image
            src={image?.src?.original}
            alt={image?.alt ?? image?.photographer}
            width={500}
            height={500}
            className="rounded hover:scale-105 hover:cursor-pointer transition"
          />
        )}
      </div>
      {image?.alt && <h1 className="text-2xl py-2">{image?.alt}</h1>}

      <div className="flex justify-center w-full px-4 lg:px-16">
        <button
          onClick={() => setLocalStorage('favorites', id)}
          className="mainButton bg-gray-200 px-3 py-1 mr-3"
        >
          Add to favorites
        </button>
        <button className="mainButton bg-gray-200 px-3 py-1">Share</button>
      </div>
    </div>
  )
}
