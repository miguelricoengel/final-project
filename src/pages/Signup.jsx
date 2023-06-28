

function Signup() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
        console.log(email, password);
        }; 
    return (
    <div className="absolute mt-4 bg-white p-5 rounded-full w-56 shadow-lg">
          <div className="flex bg-gray-bg1">
            <div className="p-10 bg-white rounded-full shadow-default py-2 px-6">
              <h1 className="text-base font-small text-primary mt-1 mb-1 text-center">
                Sign up 🫧
              </h1>

              <form onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#38bcf9] p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="w-full bg-[#38bcf9] p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                    id="password"
                    placeholder="Your Password"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-gray py-2 px-4 text-sm text-[#38bcf9] rounded-full border-[#38bcf9] focus:outline-none focus:border-blue"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        );
    }
    
    export default Signup