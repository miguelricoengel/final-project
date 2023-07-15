import axios from "axios";
import Buble from "../components/Buble";
import { useState } from "react";

function Create(props) {

  const API_URL = "/backend";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [connect, setConnect] = useState("");
  const [pic, setPic] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("connect", connect);
    formData.append("pic", pic);

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/projects`, formData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        setConnect("");
        setPic(null);
        props.refreshProjects();
      })
      .catch((error) => console.log(error));
  };

  const handleFileChange = (e) => {
    setPic(e.target.files[0]);
  };

  return (
    <div>
      <p>Create new Dash</p>
      <br />
      <br />
      <Buble
        text={
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
            <div>
              <label htmlFor="Connect">Connect</label>
              <input
                type="text"
                className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                id="connect"
                placeholder="generate code"
                value={connect}
                onChange={(e) => setConnect(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="fileInput" className="mb-2 block">
                Select a picture
              </label>
              <input
                id="pic"
                type="file"
                onChange={handleFileChange}
                className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
              />
            </div>
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
        }
        size="xl" />
    </div>
  );
}

export default Create;
