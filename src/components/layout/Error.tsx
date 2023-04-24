const Error = ({ text }: { text?: string }) => (
  <div className="flex flex-col grow items-center justify-center h-full bg-white">
    <div className="flex items-center justify-center flex-1">
      <div className="max-w-xl px-4 py-8 mx-auto text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {text ?? 'Something went wrong'}
        </h1>
        <p className="mt-4 text-gray-500">
          Try searching again, or return home to start from the beginning.
        </p>
      </div>
    </div>
  </div>
)

export default Error
