
const DiaryEntryModal = ({ entry, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <button onClick={onClose} className="text-right text-gray-500 mb-2">
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">{entry.title}</h2>
        <p className="text-gray-500 mb-4">{entry.date}</p>
        <img src={entry.imgUrl} alt={entry.title} className="w-full h-48 object-cover rounded mb-4" />
        <p>{entry.content}</p>
      </div>
    </div>
  );
};

export default DiaryEntryModal;



