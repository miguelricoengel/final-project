import { Link, useNavigate } from "react-router-dom";
import Buble from "../components/Buble";
import DashList from "../components/DashList";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_URL = '/backend';

function Home() {
  const { user } = useContext(AuthContext);

  const [dashboardId, setDashboardId] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");
  const handleCode = (e) => { setDashboardId(e.target.value) };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { dashboardId };
    console.log(requestBody)

    axios.put(
      `${API_URL}/api/referral-code`, requestBody,
      {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      }
    )
      .then(() => {
        navigate(`/${dashboardId}`);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  }

  return (
    <div id="flex">
      <h2 className="ml-3 pl-3 flex items-start text-xl">Home</h2>
      <h2 className="m-3 flex items-start p-3">
        {" "}
        Welcome back @{" "}
        <div className=" font-bold text-teal-400">{user && user.userName}</div>
      </h2>
      <br />
      <div className="flex items-center justify-around">
        <Buble text={<DashList />} size="large" />
      </div>
      <div className="flex items-center justify-center">
        <Link to="/create" className="flex">
          <Buble text="+" size="xs" className="" />
          <div className="m-2"></div>
          <label className="flex">create new Dash</label>
        </Link>
      </div>
      <div className=" flex items-end justify-end">
          {" "}
          <Buble 
          text={
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="dashboardId">Code</label>
                <input
                  type="text"
                  className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                  id="dashboardId"
                  placeholder="Your Code"
                  value={dashboardId}
                  onChange={handleCode}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-gray focus:border-blue rounded-full border-[#38bcf9] px-4 py-2 text-sm text-[#38bcf9] focus:outline-none"
                >
                  Submit
                </button>
              </div>
               </form>
          }
                
              size="medium"/>
          
          {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <br/>
    </div>
  );
}

export default Home;
