import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Buble from "./Buble";
import { AuthContext } from '../context/auth.context';

const API_URL = "http://localhost:5000";

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleEmail = (e) => { setEmail(e.target.value) };
  const handlePassword = (e) => { setPassword(e.target.value) };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    try {
      const response = axios.post(`${API_URL}/auth/login`, requestBody);
      const authToken = response.data.authToken;

      storeToken(authToken);
      authenticateUser();
      navigate('/home');
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="relative">
      <button
        className="rounded border-none bg-transparent text-white hover:bg-transparent focus:outline-none"
        onClick={toggleButton}
      >
        <Buble text="Login" size="small" />
      </button>

      {isOpen && (
        <Buble
          text={
            <>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmail}
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
                    onChange={handlePassword}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-gray focus:border-blue rounded-full border-[#38bcf9] bg-opacity-25 px-4 py-2 text-sm text-[#38bcf9] focus:outline-none"
                  >
                    Login
                  </button>
                </div>
              </form>
              { errorMessage && <p className="error-message">{errorMessage}</p> }
            </>
          }
          size="large"
        />
      )}
    </div>
  );
}

export default Login;
