import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex bg-[#0a0a0a] text-white">

      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-10">
          <h1 className="text-4xl font-bold mb-3">Welcome Back </h1>
          <p className="text-gray-300 max-w-md text-sm">
            Login to continue your journey and access your dashboard.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">

            <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

            <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
              <FaLock className="text-gray-400 mr-3" />
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

            <div className="text-right text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold"
            >
              Login
            </button>

          </form>

          <p className="text-sm text-gray-400 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-purple-400 font-semibold">
              Sign Up
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;