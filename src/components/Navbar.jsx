import { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar(image) {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isNavbarUserOpen, setNavbarUserOpen] = useState(false);
  const userDropdownRef = useRef(null);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleNavbarUser = () => {
    setNavbarUserOpen(!isNavbarUserOpen);
    setUserDropdownOpen(false);
  };

  const { user, logOutUser } = useContext(AuthContext);
  const [imageSrc, setImageSrc] = useState(image);

  const handleClickOutside = (event) => {
    if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
      setUserDropdownOpen(false);
    }
  };

  function handleImageError() {
    setImageSrc("/pics/Bubble_Pose.png");
  }


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="border-gray-200 bg-white dark:bg-transparent">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a className="flex items-center">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"></span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="mr-2 rounded-full text-sm focus:ring-2 focus:ring-gray-300 md:mr-0 p-0.5"
              id="user-menu-button"
              aria-expanded="false"
              onClick={toggleUserDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <div>{imageSrc ? (
              <img
                className="h-10 w-10 border-blue-200 p-1"
                src={imageSrc}
                alt="image"
                onError={handleImageError}
              />
            ) : (
              <img
                className="h-12 w-12 rounded-full border-2 border-blue-200 p-1"
                src="/pics/Bubble_Pose.png"
                alt="default image"
              />
            )}</div>
            </button>

            <div
              className={`${
                isUserDropdownOpen ? "" : "hidden"
              } list-none divide-x divide-gray-100 rounded-lg bg-white/50 p-3 text-base`}
              ref={userDropdownRef}
              aria-expanded= {isUserDropdownOpen}
              onClick={toggleUserDropdown}
            >
              <div className="text-gray m-2 rounded-full p-2 text-sm">
                {user && `@${user.userName}`}
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="/Profile"
                    className="block rounded-full bg-white/50 p-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-current="page"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile/settings"
                    className="block rounded-full bg-white/50 p-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-current="page"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray m-2 block rounded-full bg-white/50 px-4 py-2 text-sm hover:bg-gray-100"
                    aria-current="page"
                    onClick={logOutUser}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 md:hidden"
              id="settings-menu-button"
              aria-expanded={isNavbarUserOpen}
              onClick={toggleNavbarUser}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isNavbarUserOpen ? "" : "hidden"
            } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
            id="navbar-user"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 bg-white/50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0">
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
                  to="/dash/Settings"
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
