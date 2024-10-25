import { useState } from "react";

const AddEntryModal = () => {
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

 // function to store form data to local storage 
   const storeToLocalStorage = (formData) => {
    const addPersonalDiary = JSON.parse(localStorage.getItem("personalDiary"))||[];
console.log (addPersonalDiary);
     addPersonalDiary.push(formData);
     localStorage.setItem("personalDiary", JSON.stringify(addPersonalDiary));
 };


  const today = JSON.stringify(new Date()).substring(1, 11);
  
  const handelSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.imgUrl || !form.content || !form.date) {
      alert("Please enter all fields!");
    } else {
        //set date to today before storing in in local storage
      form.date = today;
      console.log(form);
      // store form object 
      storeToLocalStorage(form);
      setForm({ date: "", title: "", imgUrl: "", content: "" });
    }
  };
  return (
    <>
    
      <form onSubmit={handelSubmit}>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="skeleton h-auto w-auto ">
            <img
              alt="daisy"
              src={form.imgUrl}
              //src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">Add A New Diary Entry</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label" />
            <span className="label-text">Title</span>
            <input
              onChange={handleChange}
              value={form.title}
              type="text"
              name="title"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            ></input>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label" />
            <span className="label-text">Date: </span>
            <input
              onChange={handleChange}
              value={form.date}
              type="text"
              name="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            ></input>
            {/* <div className="input input-bordered w-full max-w-xs">{today}</div> */}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label" />
            <span className="label-text">Image Url</span>

            <input
              onChange={handleChange}
              type="search"
              name="imgUrl"
              value={form.imgUrl}
              className="input input-bordered w-full max-w-xs"
            ></input>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label" />
            <span className="label-text">Content</span>

            <textarea
              onChange={handleChange}
              name="content"
              value={form.content}
              className="textarea textarea-bordered textarea-lg w-full max-w-xs "
            ></textarea>
          </label>
        </div>
        <button type="submit" className="btn btn-active">
          Send
        </button>
      </form>
    </>
  );
};

export default AddEntryModal;
