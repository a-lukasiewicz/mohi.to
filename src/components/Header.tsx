import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header aria-label="Page Header" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <Link href="/">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                mohi.to
              </h1>
            </Link>

            <p className="mt-1.5 text-sm text-gray-500">
              Zadanie rekrutacyjne - Adam Łukasiewicz
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link
              href="/favorites"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
            >
              <span className="text-sm font-medium">Favorites</span>
              <Image
                src="/heart.svg"
                alt="Heart"
                width={50}
                height={50}
                className="h-3 w-3"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
