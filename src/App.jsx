import { useState } from "react";
import DiaryList from "./components/DiaryList";

const mockEntries = [
  {
    id: 1,
    title: "A Day at the Beach",
    date: "2023-10-15",
    image: "/src/assets/images/pexels-thngocbich-636237.jpg",
    content: "I had the best time at the beach today...",
  },
  {
    id: 2,
    title: "Learning React",
    date: "2023-10-14",
    image: "/src/assets/images/pexels-thngocbich-636237.jpg",
    content: "This is my second entry.",
  },
  {
    id: 3,
    title: "Learning React",
    date: "2023-10-13",
    image: "/src/assets/images/pexels-thngocbich-636237.jpg",
    content: "This is my third entry.",
  },
  {
    id: 4,
    title: "Learning React",
    date: "2023-10-12",
    image: "/src/assets/images/pexels-thngocbich-636237.jpg",
    content: "This is my fourth entry.",
  },
  {
    id: 5,
    title: "Learning React",
    date: "2023-10-11",
    image: "/src/assets/images/pexels-thngocbich-636237.jpg",
    content: "This is my fifth entry.",
  },
];

const App = () => {
  const [entries, setEntries] = useState(mockEntries);

  const sortedEntries = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">My Diary</h1>
      <DiaryList entries={sortedEntries} />
      
      {/* Add modals for viewing and adding entries */}
    </div>
  );
};

export default App;
