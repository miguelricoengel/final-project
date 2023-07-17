import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = '/backend';


function AddMessage(props) {
  const [message, setMessage] = useState("");

  const { dashboardId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object representing the body of the POST request

    const storedToken = localStorage.getItem('authToken');

    const formData = new FormData();
    formData.append('text', message);

    axios
      .post(
        `${API_URL}/api/${dashboardId}//create-quote"`, 
        formData,
        { headers: { Authorization: `Bearer ${storedToken}`} },
      )
      .then(() => {
        // Reset the state to clear the inputs
        setMessage("");
      
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
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