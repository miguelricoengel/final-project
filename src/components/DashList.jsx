import axios from "axios";
import { useState, useEffect } from "react";
import DashListItem from "./DashListItem";

function DashList() {

  const API_URL = '/backend';
  const [Dashes, setDashes] = useState([]);
  const storedToken = localStorage.getItem("authToken");

  const getAllDashes = () => {
    axios
      .get(`${API_URL}/api/`,
      { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => setDashes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllDashes();
  }, []);

  return (
    <div className="DashList w-72 h-48 overflow-auto">
      {Dashes.map((dash) => (
        <DashListItem key={dash._id} {...dash} />
      ))}
    </div>
  );
}

export default DashList;
