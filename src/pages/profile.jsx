import { useContext } from "react";
import { Link } from "react-router-dom";
import Buble from "../components/Buble";
import { AuthContext } from "../context/auth.context";
// import { Image } from 'cloudinary-react';

function Profile() {
  const { user } = useContext(AuthContext);
console.log(user)

  return (
    <div id="background-wrap">
      <Buble text={`Home`} size="small" />
      <Buble
        text={""} className="w-40"
        size="medium"
      /> 
      <br />
      <br />
      <div className="grid grid-cols-1 content-stretch gap-2">
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
  </div>

      </div><br/>
    </div>
  );
}

export default Profile;