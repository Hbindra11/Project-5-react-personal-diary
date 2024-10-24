import DiaryCard from "./DiaryCard";

const DiaryList = ({ entries, onEntryClick }) => {
  return (
    <div className="flex flex-col">
      {entries.map((entry) => (
        <DiaryCard key={entry.id} entry={entry} onClick={() => onEntryClick(entry)} />
      ))}
    </div>
  );
};

export default DiaryList;

