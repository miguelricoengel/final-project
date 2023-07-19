import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Buble from "../components/Buble";

function DashSettings() {

  const API_URL = '/backend';

  const navigate = useNavigate();
  const { dashId } = useParams();
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    axios
      .get(
        `${API_URL}/api/dashboard/${dashId}/settings`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneDash = response.data;
        setTitle(oneDash.title);
        setDescription(oneDash.description);
      })
      .catch((error) => console.log(error));

  }, [dashId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = { title, description, image };
    const storedToken = localStorage.getItem('authToken');

    axios
      .put(
        `${API_URL}/api/dashboard/${dashId}/settings`, formData, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          'Content-Type': 'multipart/form-data'
        },
      })
      .then((response) => {
        console.log(response)
        navigate(`/${dashId}`);
      });
  };
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Dash Settings</h2>
      <br></br>
      <form onSubmit={handleFormSubmit} className="space-y-4 md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImage}ref={fileInputRef}
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
        <div>
          <label htmlFor="image">Invite someone to your dashboard sharing this code:</label>
          <input
            type="text"
            className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            value={dashId}
            id="dashboardId"
            readOnly
          />
        </div>
        <br></br>
        <button type="submit" className="bg-gray focus:border-blue rounded-full border-[#38bcf9] px-4 py-2 text-sm text-blue-700 focus:outline-none"
        >Save</button>
      </form>
      <div className="fixed bottom-10 right-10">
        <Link to={`/${dashId}`}>
          <Buble text="back" size="small" />
        </Link>
      </div>
    </div>
  );
}

export default DashSettings;
