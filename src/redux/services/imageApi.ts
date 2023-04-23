import { ImageApiResponse } from '@/src/types/types'
import getImageById from '@/src/utils/getImageById'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pexels.com/v1/',
    prepareHeaders: headers => {
      headers.set('Authorization', process.env.NEXT_PUBLIC_PEXELS_API_KEY ?? '')
      headers.set('Content-Type', 'application/json')
    },
    mode: 'cors'
  }),
  endpoints: builder => ({
    getImages: builder.query<
      ImageApiResponse,
      { page: number; resultAmount: number; query: string }
    >({
      query: ({ page, resultAmount, query }) => {
        if (!query) {
          return `curated?page=${page}&per_page=${resultAmount}`
        }
        return `search?query=${query}&per_page=${resultAmount}`
      }
    }),
    getImageById: builder.query<Image, { id: string }>({
      query: ({ id }) => `photos/${id}`
    }),
    getImagesById: builder.query<Image[], { ids: string[] }>({
      queryFn: async ({ ids }) => {
        const promises = ids.map(async (id: string) => {
          return await getImageById(id)
        })

        return Promise.all(promises).then(data => {
          return { data }
        })
      }
    })
  })
})

export const {
  useGetImagesQuery,
  useGetImageByIdQuery,
  useGetImagesByIdQuery
} = imagesApi
