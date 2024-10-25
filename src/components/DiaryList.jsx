import DiaryCard from "./DiaryCard";

const DiaryList = ({ entries, onEntryClick }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {entries.map((entry) => (
        <DiaryCard key={entry.date} entry={entry} onClick={onEntryClick} />
      ))}
    </div>
  );
};

export default DiaryList;



