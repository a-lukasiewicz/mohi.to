import Link from 'next/link'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Link href="/">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                mohi.to
              </h1>
            </Link>
          </div>
          <Link
            href="https://www.linkedin.com/in/adam--lukasiewicz/"
            className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right hover:underline"
          >
            Created by: Adam Łukasiewicz
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer