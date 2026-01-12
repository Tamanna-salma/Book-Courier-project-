import { useState, useEffect } from "react";
import UseAuth from "../../components/Hooks/UseAuth";
import { toast } from "react-toastify";
import userimg from "../../assets/user.png";
import { Link, NavLink } from "react-router";
import Logo from "../Logo";
import useRole from "../../components/Hooks/useRole";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Auth
  const { user, logOut } = UseAuth();
const{ role}=useRole();
  const handleLogout = () => {
    logOut()
      .then(() => toast.success("You have logged out successfully"))
      .catch((error) => toast.error(error.message));
  };

  // Theme 
  useEffect(() => {
    const root = document.documentElement;

    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  // NavLinks
  const Links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 text-lg font-bold"
            : "text-gray-600 text-lg font-bold hover:text-purple-600"
        }>
        Home
      </NavLink>

      <NavLink
        to="/allbooks"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 text-lg font-bold"
            : "text-gray-600 text-lg font-bold hover:text-purple-600"
        }
      >
      All Books
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 text-lg font-bold"
            : "text-gray-600 text-lg font-bold hover:text-purple-600"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/covarage"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 text-lg font-bold"
            : "text-gray-600 text-lg font-bold hover:text-purple-600"
        }
      >
        Covarage
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 text-lg font-bold"
            : "text-gray-600 text-lg font-bold hover:text-purple-600"
        }
      >
        Blog
      </NavLink>

      {/* {role==='user' &&( */}
        <NavLink
          
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 border-b-2 border-purple-600 text-lg font-bold"
              : "text-gray-600 text-lg font-bold hover:text-purple-600"
          }>
        Dashbord
        </NavLink>
       {/* )}  */}
        
    </>
  );

  return (
    <div className="navbar bg-gray-300 dark:bg-gray-900 shadow-sm px-2 lg:px-5">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box"
          >
            {Links}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Logo />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">{Links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {/* Theme Toggle */}
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xl text-gray-700 dark:text-gray-200"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>


        {/* User */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL ? user.photoURL : userimg}
                  alt="user"
                  className="rounded-full"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-40">
              <li className="text-center font-semibold">{user?.displayName}</li>
              <div className="divider my-1"></div>
            

              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-semibold hover:text-red-700" >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="btn bg-cyan-600 hover:bg-purple-700  text-white"
            >
              Login
            </Link>

            <Link
              to="/auth/register"
              className="btn bg-cyan-600 hover:bg-purple-700  text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
