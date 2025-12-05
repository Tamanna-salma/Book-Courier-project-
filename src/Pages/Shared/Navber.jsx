import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";

 function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
      const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // fake user data for example
  const user = {
    email: "test@example.com",
    photoURL: "https://i.pravatar.cc/40",
  };

  // theme handler
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-blue-500">
        Home
      </NavLink>
      <NavLink to="/books" className="hover:text-blue-500">
        Books
      </NavLink>
      <NavLink to="/dashboard" className="hover:text-blue-500">
        Dashboard
      </NavLink>

      {!user && (
        <NavLink to="/login" className="hover:text-blue-500">
          Login / Register
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold dark:text-white">
            BookStore
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks}
        </div>

        {/* right side */}
        <div className="flex items-center gap-4">

          {/* theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xl text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* user profile */}
          {user ? (
            <img
              src={user.photoURL}
              alt="user"
              className="w-9 h-9 rounded-full border-2 border-blue-500"
            />
          ) : (
            <Link
              to="/login"
              className="hidden md:block text-gray-700 dark:text-gray-200"
            >
              Login/Register
            </Link>
          )}

          {/* mobile menu button */}
          <button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* mobile nav menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks}
        </div>
      )}
    </nav>
  );
}
export default Navbar;