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
    <div id="flex mt-50">
      <h2 className="ml-3 pl-3 flex items-start text-xl">Home</h2>
      <h2 className="m-3 flex items-start p-3">
        {" "}
        Welcome @{" "}
        <div className=" font-bold text-teal-400">{user && user.userName} </div>
      </h2>
      <br />
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-1">
          {/* Content for the first cell */}
          <div className="flex items-center justify-around xl:flex xl:items-start xl:justify-start xl:pl-6 ">
            <Buble text={<DashList />} size="large" customClassName="big" />
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          {/* Content for the second cell */}
          <div className="flex items-center justify-center xl:items-start xl:justify-start">
            <Link to="/create" className="flex">
              <Buble text="+" size="xs" className="" />
              <div className="m-2"></div>
              <label className="">create new Dash</label>
            </Link>
          </div>
        </div>
        <div className="col-span-1 row-span-1">

          {/* Content for the third cell */}
          
          <div className="flex items-end justify-end xl:items-start xl:justify-start xl:absolute xl:top-80 xl:right-20">
            {" "}
            <Buble
              text={
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="dashboardId">
                      Want to join a dash? <br />
                      Use their code here!
                    </label>
                    <br />
                    <br />
                    <input
                      type="text"
                      className="mb-4 text-white rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-smoutline-none transition duration-150 ease-in-out w-44 "
                      id="dashboardId"
                      placeholder="Add Code"
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
              size="medium"
            />

            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          {/* Content for the fourth cell (empty in this case) */}
        </div>
      </div>
      <br />
    </div>
  );
}

export default Home;