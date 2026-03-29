import { useState, useEffect } from "react";
import UseAuth from "../../components/Hooks/UseAuth";
import { toast } from "react-toastify";
import userimg from "../../assets/user.png";
import { Link, NavLink } from "react-router"; // Ensure correct import
import Logo from "../Logo";
import useRole from "../../components/Hooks/useRole";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Auth
  const { user, logOut } = UseAuth();
  const { role } = useRole();

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

    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // NavLinks Data
  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/allbooks" },
    { name: "About", path: "/about" },
    { name: "Coverage", path: "/coverage" },
    { name: "Blog", path: "/blog" },
    { name: "Support", path: "/support" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const Links = (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `transition-all duration-300 py-1 px-2 whitespace-nowrap ${isActive
              ? "text-cyan-600 border-b-2 border-cyan-600 text-lg font-bold"
              : "text-gray-600 text-lg font-bold hover:text-cyan-600 dark:text-gray-400"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-slate-800 shadow-sm px-4 lg:px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">

        {/* Navbar Start: Logo & Mobile Menu */}
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden dark:text-white mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-64 p-6 shadow-2xl bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 z-[100] flex flex-col gap-4"
            >
              {Links}
            </ul>
          </div>

          <Link to="/" className="flex items-center transition-transform hover:scale-105 active:scale-95">
            <Logo />
          </Link>
        </div>

        {/* Navbar Center: Desktop Links with adjusted Gap */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-5 xl:gap-8">
            {Links}
          </ul>
        </div>

        {/* Navbar End: Theme & User Profile */}
        <div className="navbar-end flex items-center gap-3 lg:gap-5">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-xl lg:text-2xl transition-all hover:bg-gray-200 dark:hover:bg-slate-700 active:scale-90 shadow-inner"
            title="Toggle Theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* User Section */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-cyan-600/10 transition-colors border-2 border-transparent hover:border-cyan-600 p-0.5">
                <div className="w-10 rounded-full shadow-md">
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
                className="menu menu-sm dropdown-content mt-4 p-4 shadow-2xl bg-white dark:bg-slate-900 rounded-3xl w-60 border border-gray-100 dark:border-slate-800 z-[100]">
                <div className="px-4 py-3 mb-2 bg-gray-50 dark:bg-slate-800 rounded-2xl">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Signed in as</p>
                  <p className="font-bold text-gray-800 dark:text-white truncate">{user?.displayName || "User"}</p>
                </div>

                <li>
                  <Link to="/dashboard/profile" className="py-3 px-4 rounded-xl font-bold dark:text-white hover:bg-cyan-600/10 hover:text-cyan-600">Profile Settings</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="py-3 px-4 rounded-xl font-black text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 mt-2" >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/auth/login"
                className="hidden sm:flex text-gray-600 dark:text-gray-300 font-bold px-4 py-2 hover:text-cyan-600 transition-colors uppercase tracking-widest text-xs"
              >
                Login
              </Link>

              <Link
                to="/auth/register"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-5 lg:px-8 py-2 lg:py-3 rounded-2xl transition-all shadow-lg shadow-cyan-600/20 active:scale-95 uppercase tracking-widest text-xs"
              >
                Join Free
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;