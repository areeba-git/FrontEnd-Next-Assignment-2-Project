'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  FaUser, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaPaw, 
  FaHeart,
  FaShieldAlt 
} from "react-icons/fa";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userData", JSON.stringify(data.user));
      window.dispatchEvent(new Event("storage"));
      router.push("/dashing");
    } catch (err) {
      setError(err.message || "Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-white">
      {/* Visual Section */}
      <div className="hidden lg:flex flex-1.2 relative items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-90 animate-[kenBurns_30s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(102,126,234,0.85)_0%,rgba(118,75,162,0.85)_50%,rgba(240,147,251,0.7)_100%)] backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white p-8 max-w-md">
          <div className="flex items-center justify-center gap-4 mb-8">
            <FaPaw className="text-3xl drop-shadow-lg" />
            <h1 className="text-4xl font-bold drop-shadow-md">Pawfect Care</h1>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold drop-shadow-md mb-2">Where Every Tail Wags with Joy</h2>
            <p className="text-lg opacity-90 leading-relaxed">Join thousands of pet parents who trust us with their furry family members</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30 font-medium">
              <FaShieldAlt className="text-base" />
              <span>Secure & Trusted</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30 font-medium">
              <FaHeart className="text-base" />
              <span>Veterinarian Approved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] sm:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] border border-gray-200 animate-[slideInFromRight_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)]">
          
          {/* Form Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_8px_15px_-3px_rgba(0,0,0,0.1)] sm:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] text-white text-lg sm:text-xl">
              <FaPaw />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Welcome Back!</h2>
            <p className="text-gray-500 text-xs sm:text-sm">We missed you and your furry friend! 🐾</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 sm:px-6 py-3 sm:py-4 rounded-lg mb-4 sm:mb-6 animate-[shake_0.5s_ease-in-out]">
              <div className="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs">!</div>
              <div className="font-medium text-sm sm:text-base">{error}</div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Username */}
            <div>
              <label className="block text-gray-900 font-semibold text-xs uppercase tracking-wide mb-2">Username or Email</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username or email"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                  disabled={isLoading}
                  className="w-full pl-10 sm:pl-12 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-70 transition text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-900 font-semibold text-xs uppercase tracking-wide mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  disabled={isLoading}
                  className="w-full pl-10 sm:pl-12 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-70 transition text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 p-1.5 sm:p-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition"
                >
                  {showPassword ? <FaEyeSlash className="text-sm sm:text-base" /> : <FaEye className="text-sm sm:text-base" />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6 text-xs sm:text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-500 font-medium">
                <input type="checkbox" className="hidden peer" />
                <span className="w-4 h-4 border-2 border-gray-200 rounded-sm flex items-center justify-center peer-checked:bg-gradient-to-br peer-checked:from-indigo-500 peer-checked:to-purple-700 peer-checked:border-indigo-500 text-white text-xs font-bold">✓</span>
                Remember me
              </label>
              <Link href="/forgot-password" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">Forgot password?</Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2.5 sm:py-3 bg-gradient-to-br from-indigo-500 to-purple-700 text-white font-semibold rounded-xl flex items-center justify-center gap-3 relative overflow-hidden transition-all hover:translate-y-[-2px] hover:shadow-[0_12px_30px_rgba(102,126,234,0.4)] disabled:opacity-70 disabled:cursor-not-allowed ${isLoading ? "bg-gray-400" : ""} text-sm sm:text-base`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
                  Signing In...
                </>
              ) : (
                <>
                  <FaPaw className="text-sm sm:text-base" />
                  Sign In to Your Account
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative text-center my-6 sm:my-8">
            <span className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -z-10"></span>
            <span className="bg-white px-4 text-gray-400 text-xs sm:text-sm relative z-10">New to Pawfect Care?</span>
          </div>

          {/* Sign Up */}
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-gray-500 mb-2 text-xs sm:text-sm">Don't have an account yet?</p>
            <Link href="/signup" className="inline-block w-full py-2.5 sm:py-3 text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white hover:translate-y-[-1px] hover:shadow-lg transition text-sm sm:text-base">
              Create Your Account
            </Link>
          </div>

          {/* Security Notice */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs border-t border-gray-200 pt-4">
            <FaShieldAlt className="text-green-500 text-sm" />
            <span>Your data is securely encrypted and protected</span>
          </div>
        </div>
      </div>
    </div>
  );
}