import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import MailIcon from "../../assets/img/gmail.svg?react";
// import MailIcon from "../../assets/img/";
import LockIcon from "../../assets/img/lock.svg?react";
import FbIcon from "../../assets/img/fb.svg?react";
import GoogleIcon from "../../assets/img/google.svg?react";
import LinkedIcon from "../../assets/img/linkedin.svg?react";
import UserIcon from "../../assets/img/user.svg?react";
// import ModalContainer from "../components/ModalContainer";
import ModalContainer from "../../components/modal/ModalContainer";

import Modal from "../../components/modal/ModalRegistration";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
// import Banner from "../components/Banner";
import Banner from "../../components/shared/banner/Banner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  // const [open, setOpen] = useState(false);
  const activeClass = "bg-white text-blue-600";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { createUser, setUser } = useContext(AuthContext);
  console.log(createUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   reset();

  //   const { email, password } = data;

  //   createUser(email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;

  //       updateProfile(user, {
  //         displayName: data.fullName,
  //       })
  //         .then(() => {
  //           setUser({
  //             uid: user.uid,
  //             email: user.email,
  //             name: data.fullName,
  //           });

  //           toast.success("User created successfully!");
  //           navigate("/");
  //         })
  //         .catch((error) => {
  //           console.log("Update profile error:", error);
  //         });
  //     })
  //     .catch((error) => {
  //       toast.error("Something went wrong!");
  //       console.log(error);
  //     });

  const onSubmit = (data) => {
    reset();
    const { fullName, email, password } = data;
    setError("");
    setSuccess("");

    // createUser(email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;

    //     updateProfile(user, {
    //       displayName: data.fullName,
    //     })
    //       .then(() => {
    //         setUser({
    //           uid: user.uid,
    //           email: user.email,
    //           name: data.fullName,
    //         });

    //         toast.success("User created successfully!");
    //         setOpen(true); // ✅ Open modal only on success
    //         navigate("/");
    //       })
    //       .catch((error) => {
    //         console.log("Update profile error:", error);
    //       });
    //   })
    //   .catch((error) => {
    //     toast.error("Something went wrong!");
    //     console.log(error);
    //   });

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, { displayName: fullName })
          .then(() => {
            setUser({
              uid: user.uid,
              email: user.email,
              name: fullName,
            });

            setSuccess("User created successfully!");
            toast.success("User created successfully!");
            // setOpen(true);
            reset();
            navigate("/");
          })
          .catch((error) => {
            setError("Profile update failed.");
            console.error(error);
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered. Please log in.");
        } else if (error.code === "auth/weak-password") {
          toast.error(
            "Password is too weak. Please use at least 6 characters."
          );
        } else {
          toast.error("User creation failed. Please try again.");
        }
        console.error(error);
      });
  };
  return (
    <>
      <Banner title="Register for an free account as">
        <div className="flex gap-10">
          <div className={`px-4 py-1 border rounded ${activeClass}`}>
            Job Seeker
          </div>
          <div className={"px-4 py-1 border rounded ${}"}>Employer</div>
          <div className={"px-4 py-1 border rounded ${}"}>
            Independent Contractor
          </div>
        </div>
      </Banner>
      {/* <div
        className="w-[1170px] flex justify-around items-stretch"
        style={{
          boxShadow: "0 0 10px rgba(0,0,0,0.15)",
        }}
      >
        <div className="w-[555px] m-1 relative flex items-center justify-center text-white bg-blue-500">
          <div className=" relative flex flex-col items-center justify-items-stretch gap-4 z-5">
            <h1 className="text-[40px] font-bold">Welcome back</h1>
            <p className="text-center">
              To start a bright career be connected with employer
            </p>
            <Link
              to="/login"
              className="px-12 py-3 bg-white text-black rounded mt-[56px] cursor-pointer"
            >
              Login
            </Link>
          </div>
      
          <div className="absolute inset-0 bg-blue-600 opacity-72"></div>
        </div>
        <div className="w-[610px] px-18 py-10 flex flex-col justify-between items-center">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-2xl font-semibold pb-10">Register With</h1>
            <div className="flex gap-8 text-gray-500">
              <div className="w-[48px] h-[48px] bg-blue-600 rounded-full p-2">
                <GoogleIcon />
              </div>
              <div className="w-[48px] h-[48px] bg-blue-600 rounded-full p-2">
                <FbIcon />
              </div>
              <div className="w-[48px] h-[48px] bg-blue-600 rounded-full p-2">
                <LinkedIcon />
              </div>
            </div>
            <div className="w-full flex items-center gap-4 mt-15">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>
          <form className="w-full flex flex-col gap-6 mt-10">
            <div className="relative">
              <input
                className="w-full p-4 pl-13 bg-gray-100"
                type="text"
                placeholder="Name"
              />
              <UserIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
            </div>
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
                <label htmlFor="remember" className="text-gray-700 text-sm ">
                  Remember password
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="text-gray-700 text-sm">
                  Make profile public to increase visibility
                </label>
              </div>
            </div>
            <div
              className="px-9 py-4 bg-blue-600 text-white text-center mt-4 mb-10 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Create my account
            </div>
          </form>
          <div className="text-center">
            <p>
              By clicking ‘Create my account’, you confirm that you agree to
              Company’s
            </p>
            <p>
              <span className="text-blue-500">Terms & Conditions</span> and{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </p>
          </div>
        </div>
        <ModalContainer isOpen={open} onClose={() => setOpen(false)}>
          <Modal
            title="Registered Successfully"
            description={
              <>
                <p>Thanks for registration.</p>
                <p>You can find your job easily.</p>
              </>
            }
          />
        </ModalContainer>
      </div> */}

      <div
        className="w-[1170px] max-w-full flex flex-col lg:flex-row justify-center items-stretch mx-auto"
        style={{
          boxShadow: "0 0 10px rgba(0,0,0,0.15)",
        }}
      >
        {/* Left Side */}
        <div className="w-full lg:w-[555px] relative flex items-center justify-center text-white bg-blue-500 p-8">
          <div className="relative flex flex-col items-center gap-4 z-10 text-center">
            <h1 className="text-2xl md:text-[40px] font-bold">Welcome back</h1>
            <p>To start a bright career be connected with employer</p>
            <Link
              to="/login"
              className="px-8 md:px-12 py-3 bg-white text-black rounded mt-10 cursor-pointer"
            >
              Login
            </Link>
          </div>
          <div className="absolute inset-0 bg-blue-600 opacity-70"></div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[610px] px-6 md:px-12 py-10 flex flex-col justify-between items-center bg-white">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-xl md:text-2xl font-semibold pb-6">
              Register With
            </h1>
            <div className="flex gap-6 md:gap-8 text-gray-500">
              <div className="w-12 h-12 bg-blue-600 rounded-full p-2 flex justify-center items-center">
                <GoogleIcon />
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full p-2 flex justify-center items-center">
                <FbIcon />
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full p-2 flex justify-center items-center">
                <LinkedIcon />
              </div>
            </div>
            <div className="w-full flex items-center gap-4 mt-8">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6 mt-8"
          >
            <div className="relative">
              <input
                {...register("fullName", { required: "Full name is required" })}
                className="w-full p-4 pl-12 bg-gray-100"
                type="text"
                placeholder="Enter your full name"
              />
              <UserIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                {...register("email", { required: "Email is required" })}
                className="w-full p-4 pl-12 bg-gray-100"
                type="email"
                placeholder="Enter your email"
              />
              <MailIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters",
                  },
                })}
                className="w-full p-4 pl-12 bg-gray-100"
                type="password"
                placeholder="Password"
              />
              <LockIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* <div className="relative">
              <input
                className="w-full p-4 pl-12 bg-gray-100"
                type="password"
                placeholder="Confirm Password"
              />
              <LockIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
            </div> */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="text-gray-700 text-sm">
                  Remember password
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="public"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="public" className="text-gray-700 text-sm">
                  Make profile public to increase visibility
                </label>
              </div>
            </div>

            {/* ✅ Firebase Error & Success Messages */}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-blue-600 text-white text-center mt-4 mb-6 cursor-pointer"
              // onClick={() => setOpen(true)}
            >
              Create my account
            </button>
          </form>
          <div className="text-center text-sm text-gray-500">
            <p>
              By clicking ‘Create my account’, you confirm that you agree to
              Company’s
            </p>
            <p>
              <span className="text-blue-500">Terms & Conditions</span> and{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </p>
          </div>
        </div>

        {/* Modal */}
        {/* <ModalContainer isOpen={open} onClose={() => setOpen(false)}>
          <Modal
            title="Registered Successfully"
            description={
              <>
                <p>Thanks for registration.</p>
                <p>You can find your job easily.</p>
              </>
            }
          />
        </ModalContainer> */}

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default Register;
