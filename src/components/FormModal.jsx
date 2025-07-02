import React from "react";
import ArrowIcon from "../assets/arrow-up.svg?react";
import CrossIcon from "../assets/cross.svg?react";

function FormModal() {
  return (
    <div className="relative p-6 flex flex-col items-center gap-8 rounded-lg">
      <div className="w-[260px] flex flex-col items-center gap-3">
        <div className="font-semibold text-[20px]">Cover Letter</div>
        <div className="text-center text-gray-500">
          To get job preference write a cover letter
        </div>
      </div>
      <div className=" text-gray-700 rounded">
        <textarea
          name="coverLetter"
          id="coverLetter"
          rows="4"
          className="w-[712px] h-[270px] border border-gray-200 p-6 rounded outline-none resize-none"
          placeholder="Write your cover letter here..."
        ></textarea>
        <p className="text-right text-gray-500 pt-2" >2000/2000</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="px-8 py-3 bg-gray-300 text-gray-500 rounded">Cancel</div>
        <div className="px-6.5 py-3 bg-blue-600 text-white rounded flex gap-2">
          Preview <ArrowIcon />
        </div>
      </div>
      <div className="absolute w-14 h-14 bg-gray-400 rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer">
        <CrossIcon />
      </div>
    </div>
  );
}

export default FormModal;
