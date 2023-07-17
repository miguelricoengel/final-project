import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_URL = '/backend';

function AddMessage() {
  const [message, setMessage] = useState("");

  const { dashId } = useParams()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    const formData = new FormData();
    formData.append('text', message);

    axios
      .post(
        `${API_URL}/api/${dashId}/create-quote`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        }
      )
      .then(() => {
        setMessage("");
        navigate(`/${dashId}`)
        // props.refreshDash();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="">
      <h3>Add New Quote</h3>

      <form onSubmit={handleSubmit}>

        <label>Message:</label>
        <textarea
          type="text"
          name="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Post Message</button>
      </form>
    </div>
  );
}

export default AddMessage;