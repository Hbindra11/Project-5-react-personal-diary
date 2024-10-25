// Import the DiaryCard component to display individual diary entries
import DiaryCard from "./DiaryCard";

// DiaryList component accepts entries and a click handler 
const DiaryList = ({ entries, onEntryClick }) => {
  return (
    <div className="grid grid-cols-1 gap-4"> 
      {entries.map((entry) => (  // Loop through each entry in the entries array
        // Render a DiaryCard for each entry
        <DiaryCard 
          key={entry.date}  // Use the entry date as a unique key for React's reconciliation
          entry={entry}  // Pass the current entry as a prop to the DiaryCard
          onClick={onEntryClick}  // Pass the click handler to the DiaryCard
        />
      ))}
    </div>
  );
};

export default DiaryList;



