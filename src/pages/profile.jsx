import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Buble from "../components/Buble";
import { AuthContext } from "../context/auth.context";
// import { Image } from 'cloudinary-react';

function Profile(image) {
  const { user } = useContext(AuthContext);
  const [imageSrc, setImageSrc] = useState(image);
  console.log(user);

  function handleImageError() {
    setImageSrc("/pics/Bubble_Pose.png");
  }

  return (
    <div id="background-wrap">
      <Link to = "/home"><Buble text={<h6 className="text-sm"> home</h6>} size="xs" /></Link>
      <h2 className="text-xl">Profile Page</h2><br/>
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
      <br />
      <div className="grid grid-cols-1 content-stretch gap-2 absolute inset-x-0 bottom-0">
        <h3>Username: </h3>
        <div className="m-2 flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 bg-white/50 p-1 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
          {user && user.userName}
        </div>
        <h3>Email address: </h3>
        <div className="m-2 flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 bg-white/50 p-1 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
          {user && user.email}
        </div>

        <div className="fixed bottom-0 right-0">
          <Link to={`/profile/settings`}>
            <Buble text="settings" size="small" />
          </Link> 
        </div><br /><br /><br />
      </div>
      <br />
    </div>
  );
}

export default Profile;
