import React from "react";
import DirectionIcon from "../assets/direction.svg?react";
import ImageIcon from "../assets/image-circle.svg?react";
import ImagerecIcon from "../assets/image-rectangle.svg?react";

function FormUserDetails() {
  return (
    <>
      <div className="flex flex-col items-center gap-14">
        <div className="flex gap-30">
          <div className="w-[260px] flex flex-col gap-3">
            <h1 className="text[20px] font-semibold">Profile photo</h1>
            <p className="text-[14px] text-gray-600">
              This image will be shown publicly as your profile picture, it will
              help recruiters recognize you!
            </p>
          </div>
          <div className="w-[540px] flex gap-6">
            <div className="w-37 h-37 rounded-full flex justify-center items-center bg-gray-300">
              <ImageIcon />
            </div>
            <div className="flex-1 p-6 flex flex-col gap-4 justify-center items-center rounded-2xl border-2 border-dashed border-blue-400">
              <div>
                <ImagerecIcon />
              </div>
              <div>
                <div className="text-center">
                  <span className="text-blue-500">Click to replace </span> or
                  drag and drop
                </div>
                <div className="text-center text-gray-500 text-sm">
                  SVG, PNG, JPG or GIF (max. 400 x 400px)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-30">
          <div className="w-[260px] flex flex-col gap-3">
            <h1 className="text[20px] font-semibold">Personal details</h1>
            <p className="text-[14px] text-gray-600">
              You can change your information any time later on.
            </p>
          </div>
          <div className="w-[540px] flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium">
                Your name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                className="p-4 resize-none bg-gray-100"
                type="text"
                placeholder="Write about your self"
              />
            </div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-medium">
                  Phone number
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  className="p-4 resize-none bg-gray-100"
                  type="text"
                  placeholder="Write about your self"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-medium">
                  Email
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  className="p-4 resize-none bg-gray-100"
                  type="text"
                  placeholder="Write about your self"
                />
              </div>
            </div>
            <div className="flex items-stretch gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[16px] font-medium">
                  Birth date
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  className="p-4 resize-none bg-gray-100"
                  type="text"
                  placeholder="Write about your self"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[16px] font-medium">
                  Gender
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  className="p-4 resize-none bg-gray-100"
                  type="text"
                  placeholder="Write about your self"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-30">
          <div className="w-[260px] flex flex-col gap-3">
            <h1 className="text[20px] font-semibold">About Me</h1>
            <p className="text-[14px] text-gray-600">
              Write some words about you such as motivation, education, and
              experience etc.
            </p>
          </div>
          <div className="w-[540px] ">
            <textarea
              className="w-full h-full p-4 resize-none bg-gray-100"
              type="text"
              placeholder="Write about your self"
            />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default FormUserDetails;
