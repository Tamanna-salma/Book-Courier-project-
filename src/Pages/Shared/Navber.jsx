import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../Logo";


const  Navbar=()=> {
  const [menuOpen, setMenuOpen] = useState(false);
      const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

      //  const { user,logOut } = UseAuth();
    // const handleLogout=()=>{
    //     logOut()
    //     .then(result=>{
    //         console.log(result);
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })

    // }

  // fake user data for example
  const user = {
    email: "test@example.com",
    photoURL: "https://i.pravatar.cc/40",
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = 
    <>
       
        <NavLink to='/' className={({ isActive }) =>
          isActive ? 'text-purple-600 border-b-2  border-purple-600  text-xl font-bold' : 'text-gray-600 text-xl font-bold hover:text-purple-600'
        }
        >Home</NavLink>
      
      
        <NavLink to='/allbooks' className={({ isActive }) =>
          isActive ? 'text-purple-600 border-b-2  border-purple-600  text-xl font-bold' : 'text-gray-600 text-xl font-bold hover:text-purple-600'
        }
        >Books</NavLink>

       
        {
          user &&<>
          <NavLink to='/dashboard' className={({ isActive }) =>
          isActive ? 'text-purple-600 border-b-2  border-purple-600  text-xl font-bold' : 'text-gray-600 text-xl font-bold hover:text-purple-600'
        }
        > Dashboard</NavLink>
          
          </>
        }
    
     
      {/* {!user && (
        <NavLink to="/login" className="hover:text-purple-600">
          Login / Register
        </NavLink>
      )} */}
      
    </>
 

  return (
    <nav className="bg-gray-300 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">


        {/* mobile menu button */}
          <button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
            {/* logo */}
         <Link to="/" className="text-2xl font-bold flex items-center gap-3">
          <Logo></Logo>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks}
        </div>

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
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
          ) : (
            <Link
              to="/login"
              className="hidden md:block text-gray-700 dark:text-gray-200"
            >
              Login
            </Link>
            
          )}
           {/* <div className='flex items-center gap-4'>
          <div className="relative group">
           {user && <img referrerPolicy="no-referrer" className='w-12 rounded-full cursor-pointer' src={user?.photoURL ? user?.photoURL : userimg} alt="" />}
            {user?.displayName && (
              <p className="absolute left-1/2 -translate-x-1/2 mt-1 text-sm bg-gray-300 text-gray-700 p-2 rounded-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.displayName}
              </p>
            )}
          </div>

          {user ?
            (<button onClick={handleLogout} className="btn bg-fuchsia-800 hover:bg-fuchsia-500 text-white"> Logout</button>
            ) : (
              <>
              <Link to="/auth/login" className='btn bg-fuchsia-800 hover:bg-fuchsia-500 text-white px-10'>login</Link>
        <Link to="/auth/register" className="btn bg-fuchsia-800 hover:bg-fuchsia-500 text-white"> Register</Link>
        </>
            )}

        </div> */}

      
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
  