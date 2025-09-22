import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/ContextProvider'

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-200 p-4 text-white">
      <div className="flex justify-between items-center">

        <div className="text-2xl font-bold text-black">
          <Link to="/">Note App</Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-600 px-4 py-2 rounded-2xl"
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
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/login" className="bg-blue-500 px-4 py-2 rounded-2xl">
                Login
              </Link>
              <Link to="/signup" className="bg-green-500 px-4 py-2 rounded-2xl">
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
            className="w-full bg-gray-600 px-4 py-2 rounded-2xl"
          />
          <div className="flex flex-col space-y-2">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="bg-blue-500 px-4 py-2 rounded-2xl text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-green-500 px-4 py-2 rounded-2xl text-center"
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
