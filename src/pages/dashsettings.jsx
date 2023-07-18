import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function DashSettings() {

  const API_URL = '/backend';

  const navigate = useNavigate();
  const { DashId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    axios
      .get(
        `${API_URL}/api/dashboard/${DashId}/settings`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneDash = response.data;
        console.log(oneDash)
        setTitle(oneDash.title);
        setDescription(oneDash.description);
      })
      .catch((error) => console.log(error));

  }, [DashId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };
    const storedToken = localStorage.getItem('authToken');

    axios
      .put(
        `${API_URL}/api/${DashId}/settings`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        console.log(response)
        navigate(`/dash/${DashId}`);
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
          <button type="submit">Save</button>
        </form>
      </div>
  );
}

export default DashSettings;
