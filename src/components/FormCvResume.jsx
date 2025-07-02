import React from "react";
import UparrowIcon from "../assets/arrow-up.svg?react";
import PaperIcon from "../assets/paper.svg?react";
import FileIcon from "../assets/fileupload.svg?react";

function CvResumeForm() {
  return (
    <div className="flex flex-col gap-14">
      <div className="px-10 py-6 border border-gray-200 rounded flex justify-between items-center gap-30">
        <div className="w-[260px] flex flex-col gap-3">
          <h1 className="text[20px] font-semibold">CV/Resume</h1>
          <p className="text-[14px] text-gray-600">
            Upload new resume/CV or use previously uploaded data
          </p>
        </div>
        <div className="w-[712px] flex justify-between gap-6">
          <div className="flex-1 flex items-center gap-3 p-4 border border-blue-600 rounded">
            <div className="w-12.5 h-12.5 bg-gray-100 p-[9px] rounded ">
              <PaperIcon />
            </div>
            <div className="flex flex-col gap-[2px]">
              <div>Not Uploaded</div>
              <div className="text-blue-600 text-sm">0 KB</div>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded">
            <div className="w-12.5 h-12.5 bg-blue-600 p-[9px] rounded ">
              <FileIcon />
            </div>
            <div className="flex flex-col gap-[2px]">
              <div>Upload CV</div>
              <div className="text-blue-600 text-sm">
                PDF, DOC, PNG, JPG [Max. 3MB]
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 py-6 border border-gray-200 rounded flex justify-between items-center gap-30">
        <div className="w-[260px] flex flex-col gap-3">
          <h1 className="text[20px] font-semibold">Signature</h1>
          <p className="text-[14px] text-gray-600">
            Upload new signature or use previously uploaded data
          </p>
        </div>
        <div className="w-[712px] flex justify-between gap-6">
          <div className="flex-1 flex items-center gap-3 p-4 border border-blue-600 rounded">
            <div className="w-12.5 h-12.5 bg-gray-100 p-[9px] rounded ">
              <PaperIcon />
            </div>
            <div className="flex flex-col gap-[2px]">
              <div>Not Uploaded</div>
              <div className="text-blue-600 text-sm">0 KB</div>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded">
            <div className="w-12.5 h-12.5 bg-blue-600 p-[9px] rounded ">
              <FileIcon />
            </div>
            <div className="flex flex-col gap-[2px]">
              <div>Upload CV</div>
              <div className="text-blue-600 text-sm">
                PDF, DOC, PNG, JPG [Max. 3MB]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvResumeForm;
