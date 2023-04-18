const SearchBar = () => {
  return (
    <div className="w-full bg-blue-200 h-32 px-8 lg:px-32">
      <div className="flex justify-center py-8">
        <input
          type="text"
          placeholder="Search for image"
          className="w-full md:w-1/2 px-5 py-3 rounded outline-none"
        />
      </div>
    </div>
  )
}

export default SearchBar
