
import AddEntryModal from "./components/AddEntryModal";

const App = () => {
  // const [count, setCount] = useState(0);
  //const today = JSON.stringify(new Date()).substring(1,11);
  return (
    <>
     
      <div className=" bg-zinc-200"></div>
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
          <AddEntryModal />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default App;
