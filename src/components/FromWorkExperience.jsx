import React from "react";
import DirectionIcon from "../assets/direction.svg?react";
import ImageIcon from "../assets/image-circle.svg?react";
import ImagerecIcon from "../assets/image-rectangle.svg?react";

function FromWorkExperience() {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="flex gap-30">
        <div className="w-[260px] flex flex-col gap-3">
          <h1 className="text[20px] font-semibold">Work Experience</h1>
          <p className="text-[14px] text-gray-600">
            Enter your work experience in an ascending manner
          </p>
        </div>
        <div className="w-[540px] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-medium">
              Organization Name<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              className="p-4 resize-none bg-gray-100"
              type="text"
              placeholder="Enter organization name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-medium">
              Designation<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              className="p-4 resize-none bg-gray-100"
              type="text"
              placeholder="Enter your designation"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-medium">
                  Start Date
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
                  End Date
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  className="p-4 resize-none bg-gray-100"
                  type="text"
                  placeholder="Write about your self"
                />
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="text-gray-700 text-sm">
                  Till Date
                </label>
              </div>
            </div>
          </div>
          <div className="w-[540px] flex flex-col gap-2">
            <label className="text-[16px] font-medium">
              Key Responsibilities
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              className="w-full h-26 p-4 resize-none bg-gray-100"
              type="text"
              placeholder="Write about your responsibilities' "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FromWorkExperience;
