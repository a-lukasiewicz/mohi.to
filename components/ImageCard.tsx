import Image from 'next/image'

interface ImageCardType {
  title: string
  imageURL: string
}

const ImageCard = ({ title, imageURL }: ImageCardType) => {
  return (
    <>
      <Image
        src={imageURL}
        alt={title}
        width={500}
        height={500}
        className="rounded hover:scale-105 hover:cursor-pointer transition"
      />
    </>
  )
}

export default ImageCard
