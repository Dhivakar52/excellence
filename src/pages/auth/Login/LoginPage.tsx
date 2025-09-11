// src/pages/auth/Login.tsx
import { useState } from "react";
import SrmLogo from "../../../assets/images/srm_login_logo.png";
import TrophyImage from "../../../assets/images/login_cup_img.png";
import loginBg from "../../../assets/images/login_left_img.png";
import { Eye ,EyeClosed } from "lucide-react";
import "./Login.module.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
     
      <div className="w-1/2  ba  flex flex-col text-white p-10 relative" 
       style={{
    backgroundImage: `linear-gradient(rgba(0,128,0,0.6), rgba(0,128,0,0.6)), url(${loginBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
      >
        <img src={SrmLogo} alt="SRM Logo" className="mb-6 w-28" />
        <img src={TrophyImage} alt="Trophy" className="mb-6 w-40" />
        <h1 className="text-[40px] font-bold mb-4">
          Welcome to the Excellence Awards Platform
        </h1>
        <p className="max-w-md">
          Discover, recognize, and celebrate outstanding projects from SRM
          innovators. Login to explore award-winning work, give your feedback,
          and celebrate excellence together.
        </p>
      </div>

     
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12">
        <div className="max-w-sm w-full">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Sign in to your account
          </p>

          {/* Email Input */}
          <label className="block mb-2 text-sm font-medium">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-green-600"
          />

          {/* Password Input */}
          <label className="block mb-2 text-sm font-medium">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </button>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-green-700 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">
            Sign In
          </button>

          {/* Signup Link */}
          <p className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-green-700 font-semibold hover:underline">
              Sign up
            </a>
          </p>

        
         
        </div>
      </div>
    </div>
  );
}
