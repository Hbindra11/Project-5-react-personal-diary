import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-zinc-200">
        <h1 className="text-3xl font-bold text-center">Personal Diary</h1>
      </div>
    </>
  );
}

export default App;
