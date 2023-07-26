import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const API_URL = '/backend';
  const storedToken = localStorage.getItem("authToken");

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);

    axios.post(
      `${API_URL}/api/create`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    )
      .then((response) => {
        console.log(response.data);
        setTitle("");
        setDescription("");
        setImage(null);
        navigate("/Home");
        // props.refreshDashboard();
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-4 md:p-8 lg:px-16 xl:px-32">
      <p className="text-lg font-bold mb-4">Create new Dash</p>
      <form onSubmit={handleSubmit} className="space-y-4 md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto">
        <div>
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="title"
            placeholder="Dash Title"
            value={title}
            onChange={handleTitle}
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <input
            type="text"
            className="w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="description"
            placeholder="Dash Description"
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div>
          <label htmlFor="fileInput" className="block mb-1">
            Select a picture
          </label>
          <div className="relative">
            <input
              id="image"
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
            />
            <button
              type="button"
              onClick={handleChooseFile}
              className="w-full rounded-full text-gray-400 border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out hover:bg-[#38bcf9] hover:bg-opacity-50 focus:bg-[#38bcf9] focus:bg-opacity-50"
            >
              Choose File
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray focus:border-blue rounded-full border-[#38bcf9] px-4 py-2 text-sm text-blue-700 focus:outline-none"
          >
            Create Dash
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
