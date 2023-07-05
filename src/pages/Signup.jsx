import Buble from "../components/Buble";

function Signup() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;
    let username = e.target.elements.username?.value;
    console.log(email, password, username);
  };

  return (
    <>
    <h1 className="text-base font-small text-primary mt-1 mb-1 text-center">
          Sign up 🫧
        </h1><br></br>
    <Buble text={
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="w-full bg-[#38bcf9] bg-opacity-25 p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
              id="username"
              placeholder="Your Username"
            />
          </div>
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
              className="bg-gray py-2 px-4 text-sm text-[#38bcf9] rounded-full border-[#38bcf9] focus:outline-none focus:border-blue"
            >
              Sign Up
            </button>
          </div>
        </form>
      
    } size="large" />
  </>
);
  }
export default Signup;
