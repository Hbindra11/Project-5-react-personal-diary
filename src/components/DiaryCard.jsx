const DiaryCard = () => {
    return (
      <div id="card-container" className="flex flex-col justify-center items-center gap-4 pt-10 pb-10 bg-cyan-100"> 
        <div id="card-container" className="card bg-base-100 image-full w-[50%] h-[200px] shadow-xl">
          <figure className="h-[70%]"> {/* Ensure figure takes up most of the card */}
            <img 
              src="/src/assets/images/pexels-thngocbich-636237.jpg" 
              alt="Diary Entry" 
              className="w-full h-full object-cover" // Image styling to fit container
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-semibold text-gray-800">Date</h2> {/* Title styling */}
            <p className="text-md text-gray-600 mb-2">Modal Title</p> {/* Subtitle styling */}
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white bg-green-500 hover:bg-blue-600 rounded-md px-4 py-2"> {/* Button styling */}
                Read
              </button>
            </div>
          </div>
        </div>
  
        {/* Repeat the same structure for additional cards */}
        <div id="card-container" className="card bg-base-100 image-full w-[50%] h-[200px] shadow-xl">
          <figure className="h-[70%]">
            <img 
              src="/src/assets/images/pexels-thngocbich-636237.jpg" 
              alt="Diary Entry" 
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-semibold text-gray-800">Date</h2>
            <p className="text-md text-gray-600 mb-2">Modal Title</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white bg-green-500 hover:bg-blue-600 rounded-md px-4 py-2">
                Read
              </button>
            </div>
          </div>
        </div>
  
        <div id="card-container" className="card bg-base-100 image-full w-[50%] h-[200px] shadow-xl">
          <figure className="h-[70%]">
            <img 
              src="/src/assets/images/pexels-thngocbich-636237.jpg" 
              alt="Diary Entry" 
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-semibold text-gray-800">Date</h2>
            <p className="text-md text-gray-600 mb-2">Modal Title</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white bg-green-500 hover:bg-blue-600 rounded-md px-4 py-2">
                Read
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DiaryCard;
  
  
