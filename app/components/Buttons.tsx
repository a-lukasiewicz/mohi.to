import Image from 'next/image'
import Link from 'next/link'

interface ButtonWithIconType {
  page: string
  image: string
}

export const ButtonWithIcon = ({ page, image }: ButtonWithIconType) => {
  return (
    <Link
      href={page}
      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
      type="button"
    >
      <span className="text-sm font-medium">Favorites</span>
      <Image
        src={`/${image}.svg`}
        alt={image}
        width={50}
        height={50}
        className="h-3 w-3"
      />
    </Link>
  )
}

interface ButtonType {
  text: string
  onClick: () => void
}

export const Button = ({ text, onClick }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className='className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 mx-2 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"'
    >
      {text}
    </button>
  )
}
