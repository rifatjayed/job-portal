import { Link, useNavigate } from "react-router";
import React, { useContext, useState } from "react";
import MailIcon from "../../../assets/gmail.svg?react";
import LockIcon from "../../../assets/lock.svg?react";
import { AuthContext } from "../../../Context/AuthContext";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../../firebase/firebase.config";
import googleicon from "../../../assets/search.png";
function Login() {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);

    const { email, password } = data;

    setError(null);
    setSuccess(null);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Login done");
        reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message || "Login failed");
        console.log(error);
      });
  };

  // const handleGoogleSign = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       navigate("/");
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleGoogleSign = () => {
    setError(null);
    setSuccess(null);

    signInWithGoogle()
      .then((result) => {
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        setError(error.message || "Google Sign-In failed");
        console.log(error);
      });
  };

  return (
    // <div
    //   className="w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-around items-stretch"
    //   style={{
    //     boxShadow: "0 0 10px rgba(0,0,0,0.15)",
    //   }}
    // >
    //   {/* Left Column */}
    //   <div className="w-full lg:w-[555px] m-1 relative flex items-center justify-center text-white bg-blue-500 min-h-[300px]">
    //     <div className="relative flex flex-col items-center justify-items-stretch gap-4 z-10 text-center p-6">
    //       <h1 className="text-[32px] lg:text-[40px] font-bold">Welcome back</h1>
    //       <p>To start a bright career be connected with employer</p>
    //     </div>
    //     <img
    //       className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
    //       src="/keyboard.png"
    //       alt="Placeholder"
    //     />
    //     <div className="absolute inset-0 bg-blue-600 opacity-70 z-0"></div>
    //   </div>

    //   {/* Right Column */}
    //   <div className="w-full lg:w-[610px] px-6 md:px-10 py-10 flex flex-col justify-between items-center">
    //     <h1 className="text-2xl font-semibold pb-6 md:pb-10">Log In</h1>
    //     <form
    //       onSubmit={handleSubmit(onSubmit)}
    //       className="w-full flex flex-col gap-6"
    //     >
    //       <div className="relative">
    //         <input
    //           {...register("email", { required: "Email is required" })}
    //           className="w-full p-4 pl-13 bg-gray-100 rounded"
    //           type="email"
    //           placeholder="Email "
    //         />
    //         <MailIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
    //         {errors.email && (
    //           <p className="text-red-500 text-sm">{errors.email.message}</p>
    //         )}
    //       </div>
    //       <div className="relative">
    //         <input
    //           {...register("password", { required: "Password is required" })}
    //           className="w-full p-4 pl-13 bg-gray-100 rounded"
    //           type="password"
    //           placeholder="Password"
    //         />
    //         <LockIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
    //         {errors.password && (
    //           <p className="text-red-500 text-sm">{errors.password.message}</p>
    //         )}
    //       </div>
    //       <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
    //         <div className="flex items-center gap-2">
    //           <input
    //             type="checkbox"
    //             id="remember"
    //             className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    //           />
    //           <label htmlFor="remember" className="text-gray-700 text-sm">
    //             Remember password
    //           </label>
    //         </div>
    //         <p className="text-red-500 text-sm text-right sm:text-left">
    //           Forgot password?
    //         </p>
    //       </div>
    //       <button
    //         type="submit"
    //         className="px-9 py-4 bg-blue-600 text-white text-center my-6 md:my-10 rounded"
    //       >
    //         Log In
    //       </button>
    //     </form>

    //     {error && <p className="text-red-500 mb-4">{error}</p>}
    //     {success && <p className="text-green-500 mb-4">{success}</p>}

    //     {/* <button onClick={handleGoogleSign} className="">
    //       <img className="w-[30px]" src={googleicon} alt="" />
    //     </button> */}

    //     <button
    //       onClick={handleGoogleSign}
    //       className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
    //     >
    //       <img
    //         className="w-[20px] h-[20px]"
    //         src={googleicon}
    //         alt="Google Icon"
    //       />
    //       <span>Continue with Google</span>
    //     </button>

    //     <Link to="/register" className="mt-4 text-sm">
    //       Didn't have account? <span className="text-blue-500">Register</span>
    //     </Link>
    //   </div>
    // </div>

    <div
      className="w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-around items-stretch"
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,0.15)",
      }}
    >
      {/* Left Column */}
      <div className="w-full lg:w-[555px] m-1 relative flex items-center justify-center text-white bg-blue-500 min-h-[300px]">
        <div className="relative flex flex-col items-center justify-items-stretch gap-4 z-10 text-center p-6">
          <h1 className="text-[32px] lg:text-[40px] font-bold">Welcome back</h1>
          <p>To start a bright career be connected with employer</p>
        </div>
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          src="/keyboard.png"
          alt="Placeholder"
        />
        <div className="absolute inset-0 bg-blue-600 opacity-70 z-0"></div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-[610px] px-6 md:px-10 py-10 flex flex-col justify-between items-center">
        <h1 className="text-2xl font-semibold pb-6 md:pb-10">Log In</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="relative">
            <input
              {...register("email", { required: "Email is required" })}
              className="w-full p-4 pl-13 bg-gray-100 rounded"
              type="email"
              placeholder="Email "
            />
            <MailIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="relative">
            <input
              {...register("password", { required: "Password is required" })}
              className="w-full p-4 pl-13 bg-gray-100 rounded"
              type="password"
              placeholder="Password"
            />
            <LockIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
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
            <p className="text-red-500 text-sm text-right sm:text-left">
              Forgot password?
            </p>
          </div>
          {/* Error and Success Messages */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <button
            type="submit"
            className="px-9 py-4 bg-blue-600 text-white text-center my-6 md:my-10 rounded"
          >
            Log In
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleSign}
          className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
        >
          <img
            className="w-[20px] h-[20px]"
            src={googleicon}
            alt="Google Icon"
          />
          <span>Continue with Google</span>
        </button>

        <Link to="/register" className="mt-4 text-sm">
          Didn't have account? <span className="text-blue-500">Register</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
