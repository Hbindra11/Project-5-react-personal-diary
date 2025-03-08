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
    <div className="container mx-auto relative ">
      <h1 className="text-3xl font-bold text-center bg-lime-300 p-5 fixed top-0 left-0 w-full z-10">
        Personal Diary
        <button
          className="btn float-right"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          + Add A New Entry
        </button>
      </h1>
      <div className="p-2 mt-20" /> {/* Add margin-top to offset the fixed header */}
      <div className="flex justify-end pr-20"></div>
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
    </div>
  );
};

export default App;

