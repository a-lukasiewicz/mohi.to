'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { prevPage, nextPage } from '../redux/features/pageSlice'

const Pagination = () => {
  const currentPage = useAppSelector(state => state.pageReducer.currentPage)
  const dispatch = useAppDispatch()

  return (
    <div className="inline-flex items-center justify-center gap-1">
      {currentPage !== 1 && (
        <Link
          onClick={() => dispatch(prevPage())}
          href={`/page/${currentPage - 1}`}
          className="paginationArrow"
        >
          <Image src="/prevPage.svg" alt="Prev Page" width={15} height={15} />
        </Link>
      )}
      <div className="px-4">
        <h3>Page {currentPage}</h3>
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
