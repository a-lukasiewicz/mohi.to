import Image from 'next/image'
import Link from 'next/link'

const Pagination = () => {
  return (
    <div className="inline-flex justify-center gap-1">
      <Link href="#" className="paginationArrow">
        <Image src="/prevPage.svg" alt="Prev Page" width={15} height={15} />
      </Link>

      <div>
        <input
          type="number"
          className="h-8 w-12 rounded border border-gray-100 p-0 text-center text-xs font-medium [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          min="1"
          value="1"
          id="PaginationPage"
        />
      </div>

      <Link href="#" className="paginationArrow">
        <Image src="/nextPage.svg" alt="Next Page" width={15} height={15} />
      </Link>
    </div>
  )
}

export default Pagination
