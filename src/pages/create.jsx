import { useState } from "react";
import axios from "axios";

// const API_URL = "/backend";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [pic, setPic] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };
    console.log(requestBody)
    axios
      .post(`http://localhost:5001/create`, requestBody)
      .then((response) => {
        console.log(response.data)
        setTitle("");
        setDescription("");
        // setPic(null);
        // props.refreshDashboard(requestBody);
      })
      .catch((error) => console.log(`holi, ${error}`));
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setPic(file);
  // };

  return (
    <div>
      <p>Create new Dash</p>
      <br />
      <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                id="title"
                placeholder="Dash Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                id="description"
                placeholder="Dash Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* <div>
              <label htmlFor="fileInput" className="mb-2 block">
                Select a picture
              </label>
              <input
                id="pic"
                type="file"
                onChange={handleFileChange}
                className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
              />
            </div> */}
            <br />

            <div>
              <button
                type="submit"
                className="bg-gray focus:border-blue rounded-full border-[#38bcf9] px-4 py-2 text-sm text-[#38bcf9] focus:outline-none"
              >
                Create Dash
              </button>
            </div>
          </form>
    </div>
  );
}

export default Create;
