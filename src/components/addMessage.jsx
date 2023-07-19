import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_URL = "/backend";

function AddMessage() {
  const [text, setText] = useState("");

  const { dashId } = useParams();
  const navigate = useNavigate();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    const requestBody = { text };

    axios
      .post(`${API_URL}/api/dashboard/${dashId}/create-quote`, requestBody, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then(() => {
        setText("");
        navigate(`/${dashId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <h3 className="mb-1 block">Want to add a new message?</h3><br/>

      <form onSubmit={handleSubmit} className="space-y-4 md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto">
        <textarea
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={handleText}
          className="w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
        /><br/>
        <br/><button
          type="submit"
          className="bg-gray focus:border-blue rounded-full border-[#38bcf9] px-4 py-2 text-sm text-blue-700 focus:outline-none"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default AddMessage;
