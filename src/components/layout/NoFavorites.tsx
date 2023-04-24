const NoFavorites = () => (
  <div className="flex flex-col grow items-center justify-center h-full bg-white">
    <div className="flex items-center justify-center flex-1">
      <div className="max-w-xl px-4 py-8 mx-auto text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          No favorites photos found
        </h1>
        <p className="mt-4 text-gray-500">Try adding some!</p>
      </div>
    </div>
  </div>
)

export default NoFavorites
