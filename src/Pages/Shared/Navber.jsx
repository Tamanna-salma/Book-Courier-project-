import { useState, useEffect } from "react";
import UseAuth from "../../components/Hooks/UseAuth";
import { Link, NavLink } from "react-router";
import Logo from "../Logo";
import { toast } from "react-toastify";
import userimg from "../../assets/user.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Auth
  const { user, logOut } = UseAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("You have logged out successfully");
      })
        .catch((error) => {
         toast.error(error.message);
      });
  };

  // Theme Effect
  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  // NavLinks
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 text-lg font-bold"
            : "text-gray-600 text-lg font-bold hover:text-purple-600"
        }
      >
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
        Books
      </NavLink>

      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 border-b-2 border-purple-600 text-lg font-bold"
              : "text-gray-600 text-lg font-bold hover:text-purple-600"
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="bg-gray-200 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 lg:px-5 py-2 flex items-center justify-between">

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-3">
      <Logo></Logo>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xl text-gray-700 dark:text-gray-200"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* User Profile + Auth Buttons */}
          <div className="flex items-center gap-4">
            {user && (
              <div className="relative group">
                <img
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-purple-500"
                  src={user?.photoURL || userimg}
                  alt=""
                />
                {user?.displayName && (
                  <p className="absolute left-1/2 -translate-x-1/2 mt-1 text-sm bg-gray-200 dark:bg-gray-700 p-2 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300">
                    {user.displayName}
                  </p>
                )}
              </div>
            )}

            {/* Login / Register / Logout */}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-purple-700 hover:bg-purple-500 text-white"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="btn bg-purple-700 hover:bg-purple-500 text-white px-6"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="btn bg-purple-700 hover:bg-purple-500 text-white"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
