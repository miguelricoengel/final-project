import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Buble from "../components/Buble";

const API_URL = "http://localhost:5000";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUserNameChange = (e) => { setUserName(e.target.value) };
  const handleEmailChange = (e) => { setEmail(e.target.value) };
  const handlePasswordChange = (e) => { setPassword(e.target.value) };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const requestBody = { email, password, userName };
      console.log(requestBody)
      axios.post(`${API_URL}/auth/signup`, requestBody)
        .then(() => {
          navigate("/Home");
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        });
    }

    return (
      <div id="background-wrap">
        <h1 className="font-small text-primary mb-1 mt-1 text-center text-base">
          <Buble text={"Sign up 🫧"} size="small" />
        </h1>
        <br></br>
        <Buble
          text={
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="userName">UserName</label>
                <input
                  type="text"
                  className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                  id="userName"
                  placeholder="Your UserName"
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                  id="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-gray focus:border-blue rounded-full border-[#38bcf9] px-4 py-2 text-sm text-[#38bcf9] focus:outline-none"
                >
                  Sign Up
                </button>
              </div>
            </form>
          }
          size="large"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>Already have account?</p>
        <Link to={"/"}> Login</Link>
      </div>
    );
  }

export default Signup;