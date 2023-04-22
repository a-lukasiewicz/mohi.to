'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <div className="inline-flex items-center justify-center gap-1">
      <Link href={`/page/${currentPage}`} className="paginationArrow">
        <Image src="/prevPage.svg" alt="Prev Page" width={15} height={15} />
      </Link>
      <div className="px-4">
        <h3>Page 1</h3>
      </div>
      <Link href={`/page/${currentPage + 1}`} className="paginationArrow">
        <Image src="/nextPage.svg" alt="Next Page" width={15} height={15} />
      </Link>
    </div>
  )
}

export default Pagination
