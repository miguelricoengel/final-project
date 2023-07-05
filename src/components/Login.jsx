import { useState } from 'react';
import Buble from './Buble';

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
        className="ball p-10 bg-[#38bcf9] text-white rounded-full"
        onClick={toggleButton}
      >
        Login
      </button>
      {isOpen && (
        <Buble
          text={
            <>
              <h1 className="text-base font-small text-primary mt-1 mb-1 text-center">
                Log in 🔐 🫧
              </h1>

              <form onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#38bcf9] bg-opacity-25 p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="w-full bg-[#38bcf9] bg-opacity-25 p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                    id="password"
                    placeholder="Your Password"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-gray py-2 px-4 text-sm text-[#38bcf9] bg-opacity-25 rounded-full border-[#38bcf9] focus:outline-none focus:border-blue"
                  >
                    Login
                  </button>
                </div>
              </form>
            </>
          } size="large"
        />
      )}
    </div>
  );
}

export default Login;
