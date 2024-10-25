// src/App.js
import { useState, useEffect } from "react";
import DiaryList from "./components/DiaryList";
import EntryDetailModal from "./components/EntryDetailModal";
import { getEntries, addOrUpdateEntry } from "./components/Storage";
import { mockEntries } from "./mockData";
const App = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    const storedEntries = getEntries();
    if (storedEntries.length === 0) {
      mockEntries.forEach((entry) => addOrUpdateEntry(entry));
      setEntries(getEntries());
    } else {
      setEntries(storedEntries);
    }
  }, []);

  const handleEntryClick = (date) => {
    const clickedEntry = entries.find((entry) => entry.date === date);
    if (clickedEntry) {
      setSelectedEntry(clickedEntry);
      setIsDetailModalOpen(true);
    }
  };

  // Clear localStorage entries for personal diary
  const clearEntries = () => {
    localStorage.removeItem("personalDiary");
    setEntries([]); // Update the state to reflect the cleared entries
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Personal Diary</h1>
      
      <DiaryList entries={entries} onEntryClick={handleEntryClick} />
      {isDetailModalOpen && selectedEntry && (
        <EntryDetailModal entry={selectedEntry} onClose={() => setIsDetailModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
