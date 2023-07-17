import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// import { Image } from 'cloudinary-react';

function Create(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const API_URL = '/backend';
  const storedToken = localStorage.getItem("authToken");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);


    axios.post(
      `${API_URL}/api/create`, formData, 
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    
    
      .then((response) => {
        console.log(response.data);
        setTitle("");
        setDescription("");
        setImage(null)
        // props.refreshDashboard();
      })
      .catch((error) => {
      console.log(`Error: ${error.message}`)
      }
      );
  };

 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

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
        <div>
              <label htmlFor="fileInput" className="mb-2 block">
                Select a picture
              </label>
              <input
                id="image"
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
    </div>
  );
}

// Create.propTypes = {
//   refreshDashboard: PropTypes.func.isRequired,
// };

export default Create;