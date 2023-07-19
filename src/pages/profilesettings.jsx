import { useContext, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import Buble from "../components/Buble";
import { useNavigate } from "react-router-dom";

function ProfileSettings(image) {
  const { user, logOutUser } = useContext(AuthContext);
  const [userName, setUserName] = useState(`${user.userName}`);
  const [profileImage, setProfileImage] = useState("");
  const [imageSrc, setImageSrc] = useState(image);
  const API_URL = "/backend";
  const storedToken = localStorage.getItem("authToken");

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  function handleImageError() {
    setImageSrc("/pics/Bubble_Pose.png");
  }

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleProfileImage = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
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

  const handleDelete = (e) => {
    e.preventDefault();

    axios
    .delete(`${API_URL}/api/profile`, {
      headers: {Authorization: `Bearer ${storedToken}`},
    })
    .then(() => {
      logOutUser();
      navigate("/");
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    });
};
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Profile Settings</h2>
      <br />
      <br />
      <div className="flex">
        <Buble
          text={
            <div>
              {imageSrc ? (
                <img
                  className="h-full w-full rounded-full p-16"
                  src={imageSrc}
                  alt="image"
                  onError={handleImageError}
                />
              ) : (
                <img
                  className="h-12 w-12 rounded-full border-2 border-blue-200 p-1"
                  src="/pics/Bubble_Pose.png"
                  alt="default image"
                />
              )}
            </div>
          }
          className="w-40"
          size="medium"
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="email"
            placeholder={user.email}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="userName">UserName</label>
          <input
            type="userName"
            className="w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
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
            className="w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm outline-none transition duration-150 ease-in-out"
            id="password"
            placeholder="**"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="profileImage">Photo</label>
          <input
            type="file"
            id="profileImage"
            onChange={handleProfileImage}
            ref={fileInputRef}
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
          <button
            type="submit"
            className="bg-gray focus:border-blue rounded-full border-[#38bcf9] px-4 py-2 text-sm text-blue-700 focus:outline-none"
          >
            Update
          </button>
        </div>
      </form>
      <form onSubmit={handleDelete} className="mt-2 mb-8">
      <div>
          <button
            type="submit"
            className="bg-gray focus:border-red rounded-full border-[#38bcf9] px-4 py-2 text-sm text-red-700 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;