const Searchbar = () => {
    return (
      <div className="relative flex justify-end items-center pr-4">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full pr-20" // Add padding to the right to make space for the button
        />
        <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-lg">
          Search
        </button>
      </div>
    );
  };
  
  export default Searchbar;
  
  
  
  
  