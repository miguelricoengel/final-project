import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isNavbarUserOpen, setNavbarUserOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleNavbarUser = () => {
    setNavbarUserOpen(!isNavbarUserOpen);
    setUserDropdownOpen(false); // !!!!! FIX !!!!! Close the user-dropdown menu when the navbar-user menu opens
  };

  return (
    <>
      <nav className="border-gray-200 bg-white dark:bg-transparent" style={{zIndex:"-1"}}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"  style={{zIndex:"-1"}}>
          <a className="flex items-center"  style={{zIndex:"-1"}}>
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"  style={{zIndex:"-1"}}></span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="mr-2 rounded-full text-sm focus:ring-2 focus:ring-gray-300 md:mr-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={toggleUserDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="h-10 w-10 rounded-full p-1 border-2 border-blue-200"
                src="https://media.istockphoto.com/id/1383831579/vector/double-thumbs-up-emoticon.jpg?s=612x612&w=0&k=20&c=gk_PkPyFLeQCB69U8vhxmzlyikncetntRGfRghJTEiM="
                alt="user photo"
              />
            </button>

            {/*  Dropdown menuu   */}

            <div
              className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white/50 p-3 text-base "
              id="user-dropdown"
            >
              <div className="">
                <span className="text-gray m-2 rounded-full p-2 text-sm">
                  @Username
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="/Profile"
                    className="block rounded-full bg-white/50 p-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signout"
                    className="block text-gray m-2 rounded-full bg-white/50 px-4 py-2 text-sm hover:bg-gray-100 "
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 md:hidden"
              aria-controls="navbar-user"
              aria-expanded={isNavbarUserOpen}
              onClick={toggleNavbarUser}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-user"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 bg-white/50 p-4 font-medium md:mt-0 md:bg-transparent md:flex-row md:space-x-8 md:border-0 md:p-0">
            <li>
                <Link
                  to="/Home"
                  className="block rounded-lg py-2 pl-3 pr-4 text-blue-500 hover:bg-blue-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Dash"
                  className="block rounded-lg py-2 pl-3 pr-4 text-blue-500 hover:bg-blue-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                  aria-current="page"
                >
                  Dash
                </Link>
              </li>
              <li>
                <Link
                  to="/DashSettings"
                  className="block rounded-lg py-2 pl-3 pr-4 text-blue-500 hover:bg-blue-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                  aria-current="page"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
