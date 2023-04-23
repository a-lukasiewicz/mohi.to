export interface ImageApiResponse {
  page: number
  per_page: number
  photos: Image[]
  total_results: number
  next_page: string
}

export interface Image {
  id: string
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  liked: boolean
  alt: string
}

export enum LocalStorageKeys {
  FAVORITES = 'favorites'
}
