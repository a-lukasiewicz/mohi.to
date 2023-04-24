import Image from 'next/image'
import Link from 'next/link'

interface ImageCardType {
  id: string
  title: string
  imageURL: string
}

const ImageCard = ({ id, title, imageURL }: ImageCardType) => {
  return (
    <Link href={`/photo/${id}`}>
      <Image
        src={imageURL}
        alt={title}
        width={500}
        height={500}
        loading="lazy"
        className="rounded hover:scale-[102%] hover:cursor-pointer transition"
      />
    </Link>
  )
}

export default ImageCard
