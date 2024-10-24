import DiaryCard from "./DiaryCard";

const DiaryList = ({ entries }) => {
  return (
    <div className="flex flex-col">
      {entries.map((entry) => (
        <DiaryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default DiaryList;

