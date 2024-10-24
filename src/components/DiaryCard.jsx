
const DiaryCard = ({ entry}) => {
  return (
    <div
      className="bg-white rounded shadow-md p-4 m-2 cursor-pointer flex items-center"
     
    >
      <img
        src={entry.image}
        alt={entry.title}
        className="w-32 h-32 object-cover rounded mr-4"  // Adjust image size
      />
      <div className="flex-1">
        <h2 className="text-xl font-bold">{entry.title}</h2>
        <p className="text-gray-500">{entry.date}</p>
      </div>
    </div>
  );
};

export default DiaryCard;


  
  
