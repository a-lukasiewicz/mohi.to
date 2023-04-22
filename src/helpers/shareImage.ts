import { toast } from 'react-hot-toast'

const shareImage = async ({ id }: { id: string }) => {
  if (!navigator.share) {
    return toast.error("Browser doesn't support Web Share API")
  }

  try {
    await navigator.share({
      title: 'mohi.to - Image shared',
      url: `https://google.com/photo/${id}`
    })
    toast.success('Image shared')
  } catch (error) {
    if (error instanceof Error) toast.error(error.message)
  }
}

export default shareImage
