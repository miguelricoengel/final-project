import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_URL = '/backend';

function AddMessage() {
  const [text, setText] = useState("");

  const { dashId } = useParams()
  const navigate = useNavigate()

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    const requestBody = { text }

    axios
      .post(
        `${API_URL}/api/dashboard/${dashId}/create-quote`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        }
      )
      .then(() => {
        setText("");
        navigate(`/${dashId}`)
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
          id="text"
          value={ text }
          onChange={handleText}
        />

        <button type="submit">Post Message</button>
      </form>
    </div>
  );
}

export default AddMessage;