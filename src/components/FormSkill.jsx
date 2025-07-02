import React from "react";
import DirectionIcon from "../assets/direction.svg?react";
import LinkedIcon from "../assets/linkedin.svg?react";

function FormSkill() {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="flex gap-30">
        <div className="w-[260px] flex flex-col gap-3">
          <h1 className="text[20px] font-semibold">skills</h1>
          <p className="text-[14px] text-gray-600">
            Write technical and soft skills that you have
          </p>
        </div>
        <div className="w-[540px] ">
          <textarea
            className="w-full h-full p-4 resize-none bg-gray-100"
            type="text"
            placeholder="Inter your skill (keyword)"
          />
        </div>
      </div>
      <div className="flex gap-30">
        <div className="w-[260px] flex flex-col gap-3">
          <h1 className="text[20px] font-semibold">Language proficiency</h1>
          <p className="text-[14px] text-gray-600">
            Write language proficiency that you have{" "}
          </p>
        </div>
        <div className="w-[540px] flex flex-col gap-6">
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium">Language</label>
              <input
                className="p-4 resize-none bg-gray-100"
                type="text"
                placeholder="Write about your self"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium">
                Profeciency Level
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
              <label className="text-[16px] font-medium">Language</label>
              <input
                className="p-4 resize-none bg-gray-100"
                type="text"
                placeholder="Write about your self"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[16px] font-medium">
                Profeciency Level
              </label>
              <input
                className="p-4 resize-none bg-gray-100"
                type="text"
                placeholder="Write about your self"
              />
              <textarea
                className="w-full h-full p-4 resize-none bg-gray-100"
                type="text"
                placeholder="Write about your self"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-30">
        <div className="w-[260px] flex flex-col gap-3">
          <h1 className="text[20px] font-semibold">Social media links</h1>
          <p className="text-[14px] text-gray-600">
            Share your social media link so that employer can know about you{" "}
          </p>
        </div>
        <div className="w-[540px] flex justify-between gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex gap-3">
              <div className="bg-blue-800 rounded-full w-6 h-6 flex justify-center items-center">
                <LinkedIcon className="w-3 h-3" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium">LinkedIn</div>
                <div className="text-blue-600">
                  Insert LinkedIn profile link
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-blue-800 rounded-full w-6 h-6 flex justify-center items-center">
                <LinkedIcon className="w-3 h-3" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium">Facebook</div>
                <div className="text-blue-600">
                  Insert LinkedIn profile link
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-3">
              <div className="bg-blue-800 rounded-full w-6 h-6 flex justify-center items-center">
                <LinkedIcon className="w-3 h-3" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium">X</div>
                <div className="text-blue-600">
                  Insert LinkedIn profile link
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-blue-800 rounded-full w-6 h-6 flex justify-center items-center">
                <LinkedIcon className="w-3 h-3" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium">Website</div>
                <div className="text-blue-600">
                  Insert LinkedIn profile link
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSkill;
