import { useState } from "react";
import { addOrUpdateEntry, getEntries } from "./Storage";

const AddEntryModal = ({ setEntries }) => {
  const [form, setForm] = useState({
    date: "",
    title: "",
    imgUrl: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.imgUrl || !form.content) {
      alert("Please enter all fields!");
      return;
    }

    const entryData = { ...form, date: form.date || today };

    addOrUpdateEntry(entryData);

    setEntries(getEntries());

    setForm({ date: "", title: "", imgUrl: "", content: "" });
    alert("Entry added!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <div className="card card-side bg-base-100 shadow-xl h-32 w-1/4 rounded-lg">
        <figure className="skeleton h-full w-full rounded-lg">
          {form.imgUrl ? (
            <img
              alt="daisy"
              src={form.imgUrl}
              className="object-cover h-full w-full rounded-lg"
            />
          ) : (
            <div className="bg-gray-200 h-full w-full rounded-lg"></div>
          )}
        </figure>
      </div>
      <div className="card-body ">
        <h2 className="card-title">Add A New Diary Entry</h2>
        <label className="form-control w-full">
          <span className="label-text">Title</span>
          <input
            onChange={handleChange}
            value={form.title}
            type="text"
            name="title"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <span className="label-text">Date</span>
          <input
            onChange={handleChange}
            value={form.date}
            type="date"
            name="date"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <span className="label-text">Image Url</span>
          <input
            onChange={handleChange}
            type="url"
            name="imgUrl"
            value={form.imgUrl}
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <span className="label-text">Content</span>
          <textarea
            onChange={handleChange}
            name="content"
            value={form.content}
            className="textarea textarea-bordered textarea-lg w-full"
          />
        </label>
        <button type="submit" className="btn btn-active mt-4">
          Save
        </button>        
      </div>
    </form>
  );
};

export default AddEntryModal;
