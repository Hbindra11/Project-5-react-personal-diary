import AddToDiaryButton from "./AddToDiaryButton";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-1 pb-5  bg-cyan-100">
      {/* Left part of the navbar */}
      <div className="navbar-start"></div>
      
      {/* Center part of the navbar */}
      <div className="navbar-center flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-3xl font-bold text-center p-4">My Personal Diary</h1>
        <AddToDiaryButton />
      </div>
      
      {/* Right part of the navbar */}
      <div className="navbar-end">
      </div>
    </div>
  );
};

export default Navbar;



