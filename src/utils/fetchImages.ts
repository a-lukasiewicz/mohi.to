const fetchImages = async () => {
  const response = await fetch(
    'https://api.pexels.com/v1/curated?per_page=10',
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

export default fetchImages
