const getImageById = async (id: string) => {
  const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    method: 'GET',
    headers: {
      Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY ?? '',
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}

export default getImageById
