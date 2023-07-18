import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function DashSettings() {

  const API_URL = '/backend';

  const navigate = useNavigate();
  const { dashId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
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
      <h2>Dash Settings</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="image"
            onChange={handleImage}
          />
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default DashSettings;
