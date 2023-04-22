import { Inter } from 'next/font/google'
import SearchBar from '@/src/components/SearchBar'
import ImageCard from '@/src/components/images/ImageCard'
import { useEffect, useState } from 'react'
import Pagination from '@/src/components/Pagination'

const inter = Inter({ subsets: ['latin'] })

async function getImages(pageResults: number) {
  const response = await fetch(
    `https://api.pexels.com/v1/curated?per_page=${pageResults}`,
    {
      method: 'GET',
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY ?? '',
        'Content-Type': 'application/json'
      }
    }
  )
  const data = await response.json()

  return data.photos
}

export default async function Home({ params: pageNumber }: any) {
  const images: Image[] = await getImages(20)

  console.log(pageNumber)

  // const [images, setImages] = useState<Image[] | null>([])

  // const getData = async () => {
  //   const response = await fetch(
  //     'https://api.pexels.com/v1/curated?per_page=10',
  //     {
  //       method: 'GET',
  //       headers: {
  //         Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY ?? '',
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   )
  //   const data = await response.json()
  //   setImages(data?.photos)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <main>
      <SearchBar />
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
      <div className="flex justify-center py-8">
        <Pagination />
      </div>
    </main>
  )
}
