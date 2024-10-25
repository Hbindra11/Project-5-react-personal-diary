import AddEntryModal from "./components/AddEntryModal";
import { useState, useEffect } from "react";
import DiaryList from "./components/DiaryList";
import DiaryEntryModal from "./components/DiaryEntryModal";
import { getEntries, addOrUpdateEntry } from "./components/Storage";
import { mockEntries } from "./mockData";

const App = () => {
  const [entries, setEntries] = useState([]);

  const [clickedDairyEntry, setClickedDairyEntry] = useState(null);
  const [isDiaryEntryModalOpen, setIsDiaryEntryModalOpen] = useState(false);

  useEffect(() => {
    // Load entries from localStorage when the component mounts
    setEntries(getEntries());
  }, []);

  const handleEntryClick = (date) => {
    const clickedEntry = entries.find((entry) => entry.date === date);
    if (clickedEntry) {
      setClickedDairyEntry(clickedEntry);
      setIsDiaryEntryModalOpen(true);
    }
  };

  return (
    <>
      <div className="bg-zinc-200"></div>
      <h1 className="text-3xl font-bold text-center">Personal Diary</h1>
      <div className="flex justify-end pr-20">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Add A New Entry
        </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <AddEntryModal setEntries={setEntries} /> {/* Pass setEntries prop */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div>
        <DiaryList entries={entries} onEntryClick={handleEntryClick} />
        {isDiaryEntryModalOpen && clickedDairyEntry && (
          <DiaryEntryModal
            entry={clickedDairyEntry}
            onClose={() => setIsDiaryEntryModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default App;

