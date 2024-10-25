import AddEntryModal from "./components/AddEntryModal";
import { useState, useEffect } from "react";
import DiaryList from "./components/DiaryList";
import DiaryEntryModal from "./components/DiaryEntryModal";
import { getEntries, addOrUpdateEntry } from "./components/Storage";
import { mockEntries } from "./mockData";
const App = () => {
 
 // State to hold all the diary entries in a list
  const [entries, setEntries] = useState([]);

  // State to hold all the diary entries in a list
  const [clickedDairyEntry, setClickedDairyEntry] = useState(null);

  // State to check if the detail modal is open or closed
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

  // Function to handle entry clicks
  const handleEntryClick = (date) => {
    // Find the clicked entry based on the date
    const clickedEntry = entries.find((entry) => entry.date === date);
    if (clickedEntry) {
      setClickedDairyEntry(clickedEntry);
      setIsDiaryEntryModalOpen(true);
    }
  };

  return (
    <>
      {/* homepage header */}
      <div className=" bg-zinc-200"></div>
      <h1 className="text-3xl font-bold text-center">Personal Diary</h1>
      <div className="flex justify-end pr-20">

        {/* code snippet from daisyUI for a button to open up the add diary entry form in a modal dialog window */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Add A New Entry
        </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <AddEntryModal />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    
    <div>
      {/* Render the DiaryList component, passing entries and click handler as props */}
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
