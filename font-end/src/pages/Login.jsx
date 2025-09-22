import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        setError(response.data.message || "Invalid credentials");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error, try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br px-4">
      <div className="shadow-xl p-8 w-full max-w-md bg-white rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-teal-700 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
