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
    if (
      userDropdownRef.current &&
      !userDropdownRef.current.contains(event.target)
    ) {
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
      <nav className="absolute w-full z-10 border-gray-200 bg-white dark:bg-transparent ">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a className="flex items-center ">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"></span>
          </a>
          <div className="flex items-centershadow-md ">
            <button
              type="button"
              className="mr-2 rounded-full border-blue-200 p-1 text-sm focus:ring-2 focus:ring-gray-300 "
              id="user-menu-button"
              aria-expanded={isNavbarUserOpen}
              onClick={toggleNavbarUser}
            >
              <span className="sr-only">Open main menu</span>
              <div>
                {imageSrc ? (
                  <img
                    className="h-10 w-10 border-blue-200 p-1"
                    src={imageSrc}
                    alt="image"
                    onError={handleImageError}
                  />
                ) : (
                  <img
                    className="h-10 w-10 rounded-full border-2 border-blue-200 p-1"
                    src="/pics/Bubble_Pose.png"
                    alt="default image"
                  />
                )}
              </div>
            </button>
          </div>
          <div
            className={`${
              isNavbarUserOpen ? "" : "hidden"
            } w-full items-center justify-between `}
            id="navbar-user"
          >
            <ul className="mt-4 flex w-full flex-col items-center justify-center rounded-lg border border-gray-100 bg-gray-50 bg-white/75 p-4 font-medium shadow-xl">
              <div className="block w-full rounded-lg bg-blue-500/50 p-2 text-sm text-white">
                {user && `@${user.userName}`}
              </div>
              <li className="w-full">
                <Link
                  to="/Home"
                  className="block w-full rounded-lg py-2 pl-3 pr-4 text-blue-500 hover:bg-blue-400/25"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/Profile"
                  className="bg-white-400/25 block w-full rounded-lg py-2 pl-3 pr-4 text-blue-500 hover:bg-blue-400/25 "
                  aria-current="page"
                >
                  Profile
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/profile/settings"
                  className="bg-white-400/25 block rounded-lg py-2 pl-3 pr-4 text-blue-500 hover:bg-blue-400/25 "
                  aria-current="page"
                >
                  Settings
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/"
                  className="block rounded-full bg-white/50 p-1 px-4 py-2 text-gray-700 hover:cursor-pointer hover:bg-gray-100"
                  aria-current="page"
                  onClick={logOutUser}
                >
                  Logout
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