import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      })
    );

    alert("Account Created Successfully");

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/login");
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
          <h1 className="text-4xl font-bold mb-3">Join Us</h1>
          <p className="text-gray-300 max-w-md text-sm">
            Create your account and start your journey.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Create your account in seconds
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
              <FaUser className="text-gray-400 mr-3" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

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

            {/* PASSWORD */}
            <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
              <FaLock className="text-gray-400 mr-3" />
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent outline-none text-sm"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
              <FaLock className="text-gray-400 mr-3" />
              <input
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full bg-transparent outline-none text-sm"
              />
              <div
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="cursor-pointer text-gray-400"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold"
            >
              Create Account
            </button>

          </form>

          <p className="text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 font-semibold">
              Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Signup;