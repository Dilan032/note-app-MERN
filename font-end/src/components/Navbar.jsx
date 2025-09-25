import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/ContextProvider'

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-400 p-4 text-white">
      <div className="flex justify-between items-center">

        <div className="text-3xl font-bold text-black">
          <Link to="/">Note App</Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block justify-end mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-80 bg-gray-200 text-black px-4 py-2 rounded-2xl focus:ring-1 focus:ring-teal-400 focus:outline-none"
          />
        </div>

        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2.5">
          {!user ? (
            <>
              <Link to="/login" className=" bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">
                Login
              </Link>
              <Link to="/register" className=" bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">
                SignUp
              </Link>
            </>
          ) : (
            <>
              <span className="text-black">{user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-2xl"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-200 px-4 py-2 rounded-2xl focus:ring-1 focus:ring-teal-400 focus:outline-none"
          />
          <div className="flex flex-col space-y-2">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className=" bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-2xl text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-2xl text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  SignUp
                </Link>
              </>
            ) : (
              <>
                <span className="text-black text-center">{user.name}</span>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-red-500 px-4 py-2 rounded-2xl"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
