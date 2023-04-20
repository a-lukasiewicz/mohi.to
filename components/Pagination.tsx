import Image from 'next/image'
import Link from 'next/link'

const Pagination = () => {
  return (
    <div className="inline-flex items-center justify-center gap-1">
      <Link href="#" className="paginationArrow">
        <Image src="/prevPage.svg" alt="Prev Page" width={15} height={15} />
      </Link>
      <div className="px-4">
        <h3>Page 1</h3>
      </div>
      <Link href="#" className="paginationArrow">
        <Image src="/nextPage.svg" alt="Next Page" width={15} height={15} />
      </Link>
    </div>
  )
}

export default Pagination
