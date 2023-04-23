'use client'

import Link from 'next/link'
import { ButtonWithIcon } from '../Buttons'
import { useAppDispatch } from '@/src/redux/hooks'
import { resetPageNumber } from '@/src/redux/features/pageSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  return (
    <header aria-label="Page Header" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <Link href="/" onClick={() => dispatch(resetPageNumber())}>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                mohi.to
              </h1>
            </Link>
            <p className="mt-1.5 text-sm text-gray-500">
              Zadanie rekrutacyjne - Adam Łukasiewicz
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <ButtonWithIcon page="/favorites" image="heart" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
