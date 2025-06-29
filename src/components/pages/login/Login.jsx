import { Link } from "react-router-dom";
import MailIcon from "../../../assets/gmail.svg?react";
import LockIcon from "../../../assets/lock.svg?react";

function Login() {
  return (
    <div
      className="w-[1170px]  flex justify-around items-stretch"
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,0.15)",
      }}
    >
      <div className="w-[555px] m-1 relative flex items-center justify-center text-white bg-blue-500">
        <div className="relative flex flex-col items-center justify-items-stretch gap-4 z-5">
          <h1 className="text-[40px] font-bold">Welcome back</h1>
          <p className="text-center">
            To start a bright career be connected with employer
          </p>
        </div>
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          src="/keyboard.png"
          alt="Placeholder"
        />
        <div className="absolute inset-0 bg-blue-600 opacity-72"></div>
      </div>
      <div className="w-[610px] px-18 py-10 flex flex-col justify-between items-center">
        <h1 className="text-2xl font-semibold pb-10">Log In</h1>
        <form className="w-full flex flex-col gap-6">
          <div className="relative">
            <input
              className="w-full p-4 pl-13 bg-gray-100"
              type="text"
              placeholder="Email or Phone"
            />
            <MailIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
          </div>
          <div className="relative">
            <input
              className="w-full p-4 pl-13 bg-gray-100"
              type="password"
              placeholder="Password"
            />
            <LockIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="text-gray-700 text-sm">
                Remember password
              </label>
            </div>
            <p className="text-red-500">Forgot password?</p>
          </div>
          <div className="px-9 py-4 bg-blue-600 text-white text-center my-10">
            Log In
          </div>
        </form>
        <Link to="/register">
          Didn't have account? <span className="text-blue-500">Register</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
