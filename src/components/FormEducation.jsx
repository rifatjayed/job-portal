// import React from "react";
// import DirectionIcon from "../assets/direction.svg?react";

// function FormEducation() {
//   return (
//     <div className="flex flex-col items-center gap-14">
//       <div className="flex gap-30">
//         <div className="w-[260px] flex flex-col gap-3">
//           <h1 className="text[20px] font-semibold">Education</h1>
//           <p className="text-[14px] text-gray-600">
//             Enter your education in an ascending manner{" "}
//           </p>
//         </div>
//         <div className="w-[540px] flex flex-col gap-6">
//           <div className="flex flex-col gap-2">
//             <label className="text-[16px] font-medium">
//               Institute Name<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 resize-none bg-gray-100"
//               type="text"
//               placeholder="Enter institute name"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-[16px] font-medium">
//               Degree name<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 resize-none bg-gray-100"
//               type="text"
//               placeholder="Enter your degree name"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <div className="flex justify-between gap-6">
//               <div className="flex flex-col gap-2">
//                 <label className="text-[16px] font-medium">
//                   Start Date
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   className="p-4 resize-none bg-gray-100"
//                   type="text"
//                   placeholder="Write about your self"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[16px] font-medium">
//                   End Date
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   className="p-4 resize-none bg-gray-100"
//                   type="text"
//                   placeholder="Write about your self"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end w-full">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="remember" className="text-gray-700 text-sm">
//                   Till Date
//                 </label>
//               </div>
//             </div>
//           </div>
//           <hr className="text-gray-300" />
//           <div className="flex flex-col gap-2">
//             <label className="text-[16px] font-medium">
//               Institute Name<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 resize-none bg-gray-100"
//               type="text"
//               placeholder="Enter institute name"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-[16px] font-medium">
//               Degree name<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 resize-none bg-gray-100"
//               type="text"
//               placeholder="Enter your degree name"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <div className="flex justify-between gap-6">
//               <div className="flex flex-col gap-2">
//                 <label className="text-[16px] font-medium">
//                   Start Date
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   className="p-4 resize-none bg-gray-100"
//                   type="text"
//                   placeholder="Write about your self"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[16px] font-medium">
//                   End Date
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   className="p-4 resize-none bg-gray-100"
//                   type="text"
//                   placeholder="Write about your self"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end w-full">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="remember" className="text-gray-700 text-sm">
//                   Till Date
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FormEducation;

// new div

// <div className="flex flex-col items-center gap-14 px-8 md:px-6">
//   <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 w-full">
//     {/* Left side */}
//     <div className="w-full lg:w-[260px] flex flex-col gap-3">
//       <h1 className="text-[20px] font-semibold">Education</h1>
//       <p className="text-[14px] text-gray-600">
//         Enter your education in an ascending manner
//       </p>
//     </div>

//     {/* Right side */}
//     <div className="w-full lg:w-[540px] flex flex-col gap-6">
//       {/* Education Block 1 */}
//       <div className="flex flex-col gap-2">
//         <label className="text-[16px] font-medium">
//           Institute Name<span className="text-red-500 ml-1">*</span>
//         </label>
//         <input
//           className="p-4 bg-gray-100"
//           type="text"
//           placeholder="Enter institute name"
//         />
//       </div>

//       <div className="flex flex-col gap-2">
//         <label className="text-[16px] font-medium">
//           Degree name<span className="text-red-500 ml-1">*</span>
//         </label>
//         <input
//           className="p-4 bg-gray-100"
//           type="text"
//           placeholder="Enter your degree name"
//         />
//       </div>

//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col md:flex-row justify-between gap-4">
//           <div className="flex flex-col gap-2 w-full md:w-1/2">
//             <label className="text-[16px] font-medium">
//               Start Date<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 bg-gray-100"
//               type="text"
//               placeholder="e.g. Jan 2020"
//             />
//           </div>
//           <div className="flex flex-col gap-2 w-full md:w-1/2">
//             <label className="text-[16px] font-medium">
//               End Date<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 bg-gray-100"
//               type="text"
//               placeholder="e.g. Dec 2023"
//             />
//           </div>
//         </div>
//         <div className="flex justify-end w-full">
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               id="remember1"
//               className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//             />
//             <label htmlFor="remember1" className="text-gray-700 text-sm">
//               Till Date
//             </label>
//           </div>
//         </div>
//       </div>

//       <hr className="text-gray-300" />

//       {/* Education Block 2 */}
//       <div className="flex flex-col gap-2">
//         <label className="text-[16px] font-medium">
//           Institute Name<span className="text-red-500 ml-1">*</span>
//         </label>
//         <input
//           className="p-4 bg-gray-100"
//           type="text"
//           placeholder="Enter institute name"
//         />
//       </div>

//       <div className="flex flex-col gap-2">
//         <label className="text-[16px] font-medium">
//           Degree name<span className="text-red-500 ml-1">*</span>
//         </label>
//         <input
//           className="p-4 bg-gray-100"
//           type="text"
//           placeholder="Enter your degree name"
//         />
//       </div>

//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col md:flex-row justify-between gap-4">
//           <div className="flex flex-col gap-2 w-full md:w-1/2">
//             <label className="text-[16px] font-medium">
//               Start Date<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 bg-gray-100"
//               type="text"
//               placeholder="e.g. Jan 2016"
//             />
//           </div>
//           <div className="flex flex-col gap-2 w-full md:w-1/2">
//             <label className="text-[16px] font-medium">
//               End Date<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 bg-gray-100"
//               type="text"
//               placeholder="e.g. Dec 2019"
//             />
//           </div>
//         </div>
//         <div className="flex justify-end w-full">
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               id="remember2"
//               className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//             />
//             <label htmlFor="remember2" className="text-gray-700 text-sm">
//               Till Date
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// new div

// import React from "react";
// import DirectionIcon from "../assets/direction.svg?react";

// function FormEducation() {
//   return (
//     <div className="flex flex-col items-center gap-14">
//       <div className="flex gap-30">
//         <div className="w-[260px] flex flex-col gap-3">
//           <h1 className="text[20px] font-semibold">Education</h1>
//           <p className="text-[14px] text-gray-600">
//             Enter your education in an ascending manner{" "}
//           </p>
//         </div>
//         <div className="w-[540px] flex flex-col gap-6">
//           <div className="flex flex-col gap-2">
//             <label className="text-[16px] font-medium">
//               Institute Name<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 resize-none bg-gray-100"
//               type="text"
//               placeholder="Enter institute name"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-[16px] font-medium">
//               Degree name<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 resize-none bg-gray-100"
//               type="text"
//               placeholder="Enter your degree name"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <div className="flex justify-between gap-6">
//               <div className="flex flex-col gap-2">
//                 <label className="text-[16px] font-medium">
//                   Start Date
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   className="p-4 resize-none bg-gray-100"
//                   type="text"
//                   placeholder="Write about your self"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[16px] font-medium">
//                   End Date
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   className="p-4 resize-none bg-gray-100"
//                   type="text"
//                   placeholder="Write about your self"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end w-full">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="remember" className="text-gray-700 text-sm">
//                   Till Date
//                 </label>
//               </div>
//             </div>
//           </div>
//           <hr className="text-gray-300" />
//           <div className="flex flex-col gap-2">
//             <label className="text-[16px] font-medium">
//               Institute Name<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 resize-none bg-gray-100"
//               type="text"
//               placeholder="Enter institute name"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-[16px] font-medium">
//               Degree name<span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               className="p-4 resize-none bg-gray-100"
//               type="text"
//               placeholder="Enter your degree name"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <div className="flex justify-between gap-6">
//               <div className="flex flex-col gap-2">
//                 <label className="text-[16px] font-medium">
//                   Start Date
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   className="p-4 resize-none bg-gray-100"
//                   type="text"
//                   placeholder="Write about your self"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[16px] font-medium">
//                   End Date
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   className="p-4 resize-none bg-gray-100"
//                   type="text"
//                   placeholder="Write about your self"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end w-full">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="remember" className="text-gray-700 text-sm">
//                   Till Date
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FormEducation;

import React from "react";
import DirectionIcon from "../assets/direction.svg?react";

function FormEducation() {
  return (
    <div className="flex flex-col items-center gap-14 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 w-full max-w-[1170px]">
        {/* Left Side Title */}
        <div className="lg:w-[260px] w-full flex flex-col gap-3">
          <h1 className="text-[20px] font-semibold">Education</h1>
          <p className="text-[14px] text-gray-600">
            Enter your education in an ascending manner
          </p>
        </div>

        {/* Form Fields */}
        <div className="lg:w-[540px] w-full flex flex-col gap-6">
          {[1, 2].map((item, index) => (
            <div key={index}>
              {/* Institute Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-medium">
                  Institute Name<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  className="p-4 resize-none bg-gray-100"
                  type="text"
                  placeholder="Enter institute name"
                />
              </div>

              {/* Degree Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-medium">
                  Degree name<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  className="p-4 resize-none bg-gray-100"
                  type="text"
                  placeholder="Enter your degree name"
                />
              </div>

              {/* Dates */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-[16px] font-medium">
                      Start Date<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      className="p-4 resize-none bg-gray-100"
                      type="text"
                      placeholder="Start date"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-[16px] font-medium">
                      End Date<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      className="p-4 resize-none bg-gray-100"
                      type="text"
                      placeholder="End date"
                    />
                  </div>
                </div>

                {/* Till Date */}
                <div className="flex justify-end w-full">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`remember-${index}`}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`remember-${index}`}
                      className="text-gray-700 text-sm"
                    >
                      Till Date
                    </label>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index === 0 && <hr className="text-gray-300 my-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormEducation;
