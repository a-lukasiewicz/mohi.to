const fetchByTitle = async (title: string, perPage: number) => {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${title}&per_page=${perPage}`,
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

export default fetchByTitle