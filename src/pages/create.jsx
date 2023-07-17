import { useState } from "react";
import axios from "axios";

const API_URL = "/backend";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  // const [pic, setPic] = useState(null);

  const handleTitle = (e) => {
    flushErrors();
    setTitle(e.target.value);
  }
  const handleDescription = (e) => {
    flushErrors();
    setDescription(e.target.value);
  }
  const flushErrors = () => {
    setError('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description };
    const storedToken = localStorage.getItem("authToken");

    console.log(requestBody);

    if (!storedToken){
      setError('Token Error');
    }

    axios
      .post(`${API_URL}/api/create`, requestBody, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTitle("");
        setDescription("");
        // SetPic("")
        props.refreshDashboard();
      })
      .catch((error) => {
      setError(error.response.data)
      console.log(`Error: ${error.message}`)
      }
      );
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
            onChange={handleTitle}
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
            onChange={handleDescription}
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
