import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import Buble from "../components/Buble";
import { useNavigate } from "react-router-dom";

function ProfileSettings() {
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState(`${user.userName}`);
  const [profileImage, setProfileImage] = useState("");
  const API_URL = "/backend";
  const storedToken = localStorage.getItem("authToken");

  const navigate = useNavigate();


  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleProfileImage = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('profileImage', profileImage);

    axios
      .put(`${API_URL}/api/profile`, formData, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          'Content-Type': 'multipart/form-data'
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserName("");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  };
  return (
    <div>
      <h2>Profile Settings</h2>
      <br />
      <br />
      <div className="flex">
        <Buble
          text={<img src={user && user.profileImage} className="w-40" />}
          size="medium"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="email"
            placeholder={user.email}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="userName">UserName</label>
          <input
            type="userName"
            className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="userName"
            placeholder={user.userName}
            value={userName}
            onChange={handleUserName}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="password"
            placeholder="******"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="profileImage">Photo</label>
          <input
            type="file"
            className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="profileImage"
            onChange={handleProfileImage}
          />
        </div>
        <div>
          <button
            type="submit"
            className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out text-blue-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;