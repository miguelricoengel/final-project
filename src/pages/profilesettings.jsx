import Buble from "../components/Buble";

function ProfileSettings () {
    return (
        <div>
        <h2>Profile Settings</h2><br/><br/>

            <form onSubmit="">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="w-full bg-[#38bcf9] bg-opacity-25 p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                  id="username"
                  placeholder="@username"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#38bcf9] bg-opacity-25 p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                  id="email"
                  placeholder="youremail@email.com"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="w-full bg-[#38bcf9] bg-opacity-25 p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                  id="password"
                  placeholder="****************"
                />
              </div>
              <div>
                <label htmlFor="username">Active Dashes</label>
                <input
                  type="text"
                  className="w-full bg-[#38bcf9] bg-opacity-25 p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                  id="username"
                  placeholder="3"
                />
              </div>
              <div>
                <label htmlFor="username">Connected Users</label>
                <input
                  type="text"
                  className="w-full bg-[#38bcf9] bg-opacity-25 p-2 text-white border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
                  id="username"
                  placeholder="2"
                />
              </div>
              
    
              <div>
                <button
                  type="submit"
                  className="bg-gray py-2 px-4 text-sm text-[#38bcf9] rounded-full border-[#38bcf9] focus:outline-none focus:border-blue"
                >
                  Edit
                </button>
              </div>
            </form>
        </div>
    )
}

export default ProfileSettings;

