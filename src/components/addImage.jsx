import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_URL = "/backend";

function AddMessage() {
  const [path, setPath] = useState(null);
  const { dashId } = useParams();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPath(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    const formData = new FormData();
    formData.append("path", path);

    axios
      .post(`${API_URL}/api/dashboard/${dashId}/create-image`, formData, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setPath(null);
        navigate(`/${dashId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <h3>Want to add an image?</h3>
      <br />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fileInput" className="mb-2 block"></label>
          <input
            id="image"
            type="file"
            onChange={handleFileChange}
            className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="bg-gray focus:border-blue rounded-full border-[#38bcf9] px-4 py-2 text-sm text-blue-700 focus:outline-none"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
}

export default AddMessage;
