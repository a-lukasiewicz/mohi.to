'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector, useAppDispatch } from '@/src/redux/hooks'
import { prevPage, nextPage } from '@/src/redux/features/pageSlice'

const Pagination = () => {
  const currentPage = useAppSelector(state => state.pageReducer.currentPage)
  const dispatch = useAppDispatch()

  const prevPageConditions = () => {
    if (currentPage === 2) return '/'
    return `/page/${currentPage - 1}`
  }

  return (
    <div className="inline-flex items-center justify-center gap-1">
      {currentPage !== 1 && (
        <Link
          onClick={() => dispatch(prevPage())}
          href={prevPageConditions()}
          className="paginationArrow"
        >
          <Image src="/prevPage.svg" alt="Prev Page" width={15} height={15} />
        </Link>
      )}
      <div className="px-4">
        <p>Page {currentPage}</p>
      </div>
      <Link
        onClick={() => dispatch(nextPage())}
        href={`/page/${currentPage + 1}`}
        className="paginationArrow"
      >
        <Image src="/nextPage.svg" alt="Next Page" width={15} height={15} />
      </Link>
    </div>
  )
}

export default Pagination
