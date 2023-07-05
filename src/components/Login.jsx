import { useState } from "react";
import Buble from "./Buble";

function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };

  return (
    <div className="relative">
      <button
        className="rounded border-none bg-transparent text-white hover:bg-transparent focus:outline-none"
        onClick={toggleButton}>
        <Buble text="Login" size="medium" />
      </button>

      {isOpen && (
        <Buble
          text={
            <>
              <h1 className="font-small text-primary mb-1 mt-1 text-center text-base">
                Log in 🔐 🫧
              </h1>

              <form onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="mb-4 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
                    id="password"
                    placeholder="Your Password"
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
            </>
          }
          size="large"
        />
      )}
    </div>
  );
}

export default Login;
