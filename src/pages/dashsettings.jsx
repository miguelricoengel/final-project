import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function DashSettings() {

  const API_URL = "/backend";

  const navigate = useNavigate();
  const { DashId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    axios
      .get(
        `${API_URL}/api/Dashes/${DashId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneDash = response.data;
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
        `${API_URL}/api/Dashes/${DashId}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        console.log(response)
        navigate(`/Dashes/${DashId}`);
      });
  };

  return (
    <p>Dash Settings</p>
  );
}

export default DashSettings;
