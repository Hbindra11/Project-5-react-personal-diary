// src/App.js
import { useState, useEffect } from "react";
import DiaryList from "./components/DiaryList";
import DiaryEntryModal from "./components/DiaryEntryModal";
import { getEntries, addOrUpdateEntry } from "./components/Storage";
import { mockEntries } from "./mockData";
const App = () => {
  // Holds all the entries in a list  
  const [entries, setEntries] = useState([]);

  // keeps track on the diary entry that has been clicked
  const [clickedDairyEntry, setClickedDairyEntry] = useState(null);

  // checks if the detail modal is open or closed
  const [isDiaryEntryModalOpen, setIsDiaryEntryModalOpen] = useState(false);

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
      setClickedDairyEntry
      (clickedEntry);
      setIsDiaryEntryModalOpen(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Personal Diary</h1>
      
      <DiaryList entries={entries} onEntryClick={handleEntryClick} />
      {isDiaryEntryModalOpen
 && clickedDairyEntry
       && (
        <DiaryEntryModal entry={clickedDairyEntry

        } onClose={() => setIsDiaryEntryModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
