import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        { name, email, password }
      );

      if (response.data.success) {
        navigate("/login");
      } else {
        setError(response.data.message || "Something went wrong!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error, try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="shadow-xl p-8 w-full max-w-md bg-white rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              id="password"
              placeholder="*********"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-lg transition duration-200 disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-700 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
