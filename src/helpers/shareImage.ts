import { toast } from 'react-hot-toast'

const shareImage = ({ id }: { id: string }) => {
  if (!navigator.share) {
    return toast.error("Browser doesn't support Web Share API")
  }

  navigator
    .share({
      title: 'mohi.to - Image shared',
      url: `https://google.com/photo/${id}`
    })
    .then(() => {
      console.log('Thanks for sharing!')
    })
    .catch(err => {
      toast.error(err)
    })
}

export default shareImage
