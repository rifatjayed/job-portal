// import React, { useContext, useState } from "react";
// // import { JobContext } from "../../../Context/JobContext";
// import { JobContext } from "../../../Context/JobContext";
// import { useParams } from "react-router-dom";

// import { RxBookmark } from "react-icons/rx";
// import { FiShare2 } from "react-icons/fi";
// import { FaGraduationCap, FaBuromobelexperte } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { TiBookmark } from "react-icons/ti";
// // import ModalContainer from "../../components/modal/ModalContainer";
// import ModalContainer from "../../modal/ModalContainer";
// import Modal from "../../modal/ModalRegistration";
// import { RiCalendar2Line, RiLayoutGrid2Line } from "react-icons/ri";

// import { CiLocationOn, CiTimer } from "react-icons/ci";
// import { IoPersonOutline } from "react-icons/io5";
// import JobItem from "../../shared/JobItem";
// import BannerProfile from "../../shared/banner/BannerProfile";

// export default function () {
//   const [open, setOpen] = useState(false);

//   const { id } = useParams();
//   console.log(id);
//   const { jobs } = useContext(JobContext);

//   const job = jobs.find((j) => j.id === id);

//   if (!job) {
//     return (
//       <div className="text-center text-red-500 mt-20 text-xl">
//         Job not found
//       </div>
//     );
//   }

//   return (
//     <>
//       <BannerProfile />

//       {/* <div className="px-[135px] mt-[32px]">
//         <div className="flex justify-between gap-[45px]  ">
//           <div className="flex-1">
//             <div>
//               <h1 className="font-semibold text-2xl mb-4">Hemp Co. Ltd</h1>
//               <p className="flex items-center gap-2 font-normal  text-base mb-[24px]">
//                 <span>
//                   <CiLocationOn />
//                 </span>
//                 Mirpur, Dhaka
//               </p>
//             </div>

//             <div className="flex gap-[18px] font-normal text-base">
//               <p className=" text-[#9199A3] bg-gray-100 rounded-3xl px-[10px] py-[6px]">
//                 Full-Time{" "}
//               </p>
//               <p className=" text-white bg-[#9199A3] rounded-3xl px-[10px] py-[6px]">
//                 $ 1500 - $ 2000
//               </p>
//               <p className=" text-[#FF0000] bg-[#FFEDED] rounded-3xl px-[10px] py-[6px]">
//                 Multinational brand
//               </p>
//             </div>

//             <div>
//               <div className="mt-[40px] ">
//                 <h1 className="text-xl text-black font-semibold">
//                   Description
//                 </h1>
//                 <p className="text-base text-[#5E6670]">
//                   As a Software Administrator, you will be responsible for
//                   managing, maintaining, and optimizing software systems within
//                   our organization. You will play a critical role in ensuring
//                   that our software infrastructure operates efficiently and
//                   effectively to support our business objectives. This position
//                   requires strong technical expertise, problem-solving skills,
//                   and the ability to work collaboratively with cross-functional
//                   teams.
//                 </p>
//                 <p className="text-base text-[#18191C]">
//                   Want to work with us? You're in good company!
//                 </p>
//               </div>
//               <div className="mt-[15px]">
//                 <h1 className="text-xl text-black font-semibold">
//                   Qualifications
//                 </h1>
//                 <ul className="list-disc list-inside text-base text-gray-800 ">
//                   <li>
//                     Bachelor’s degree in Computer Science, Information
//                     Technology, or a related field.
//                   </li>
//                   <li>
//                     Proven experience as a Software Administrator or similar
//                     role.
//                   </li>
//                   <li>
//                     Proficiency in software installation, configuration, and
//                     troubleshooting.
//                   </li>
//                   <li>
//                     Strong knowledge of operating systems, databases, and
//                     networking concepts.
//                   </li>
//                   <li>
//                     Familiarity with software deployment tools and version
//                     control systems.
//                   </li>
//                   <li>Excellent analytical and problem-solving skills.</li>
//                   <li>Effective communication and interpersonal abilities.</li>
//                   <li>
//                     Attention to detail and ability to work independently as
//                     well as part of a team.
//                   </li>
//                 </ul>
//               </div>

//               <div className="mt-[15px]">
//                 <h1 className="text-xl text-black font-semibold">
//                   Responsibilities
//                 </h1>
//                 <ul className="list-disc list-inside text-base text-gray-800 ">
//                   <li>
//                     Bachelor’s degree in Computer Science, Information
//                     Technology, or a related field.
//                   </li>
//                   <li>
//                     Proven experience as a Software Administrator or similar
//                     role.
//                   </li>
//                   <li>
//                     Proficiency in software installation, configuration, and
//                     troubleshooting.
//                   </li>
//                   <li>
//                     Strong knowledge of operating systems, databases, and
//                     networking concepts.
//                   </li>
//                   <li>
//                     Familiarity with software deployment tools and version
//                     control systems.
//                   </li>
//                   <li>Excellent analytical and problem-solving skills.</li>
//                   <li>Effective communication and interpersonal abilities.</li>
//                   <li>
//                     Attention to detail and ability to work independently as
//                     well as part of a team.
//                   </li>
//                 </ul>
//               </div>

//               <div className="mt-[15px]">
//                 <h1 className="text-xl text-black font-semibold">Benefits</h1>
//                 <ul className="list-disc list-inside text-base text-gray-800 ">
//                   <li>
//                     Bachelor’s degree in Computer Science, Information
//                     Technology, or a related field.
//                   </li>
//                   <li>
//                     Proven experience as a Software Administrator or similar
//                     role.
//                   </li>
//                   <li>
//                     Proficiency in software installation, configuration, and
//                     troubleshooting.
//                   </li>
//                   <li>
//                     Strong knowledge of operating systems, databases, and
//                     networking concepts.
//                   </li>
//                   <li>
//                     Familiarity with software deployment tools and version
//                     control systems.
//                   </li>
//                   <li>Excellent analytical and problem-solving skills.</li>
//                   <li>Effective communication and interpersonal abilities.</li>
//                   <li>
//                     Attention to detail and ability to work independently as
//                     well as part of a team.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="w-[365px]">
//             <div className="flex gap-3 mb-[40px]">
//               <div className="ml-auto">
//                 <button className="text-base text-white bg-blue-600 px-[48px] py-[12px] rounded">
//                   Apply now
//                 </button>
//               </div>
//               <div className="w-14 h-12 flex items-center justify-center text-blue-600 border-2 border-blue-600 rounded">
//                 <TiBookmark size={30} />
//               </div>
//               <div className="w-14 h-12 flex items-center justify-center text-blue-600 border-2 border-blue-600 rounded">
//                 <FiShare2 size={30} />
//               </div>
//             </div>
//             <div className="grid gap-[32px]">
//               <div className="p-[24px] border border-gray-100">
//                 <div className="grid grid-cols-2 gap-[24px] ">
//                   <div className="flex flex-col gap-3 text-blue-600">
//                     <RiCalendar2Line size={36} />
//                     <div>
//                       <p className="text-base text-gray-400">Job Posted</p>
//                       <p className="text-lg text-gray-600"> March 02, 2024</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-3 text-blue-600">
//                     <CiTimer size={36} />
//                     <div>
//                       <p className="text-base text-gray-400">Job Posted</p>
//                       <p className="text-lg text-gray-600"> April 03, 2024</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-3  text-blue-600">
//                     <RiLayoutGrid2Line size={36} />
//                     <div>
//                       <p className="text-base text-gray-400">Level</p>
//                       <p className="text-lg text-gray-600">Mid level</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-3  text-blue-600">
//                     <FaGraduationCap size={36} />
//                     <div>
//                       <p className="text-base text-gray-400">Education</p>
//                       <p className="text-lg text-gray-600">Master's </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-3  text-blue-600">
//                     <FaBuromobelexperte size={36} />
//                     <div>
//                       <p className="text-base text-gray-400">Experience</p>
//                       <p className="text-lg text-gray-600"> 2-3nYears</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-3 text-blue-600">
//                     <IoPersonOutline size={36} />
//                     <div>
//                       <p className="text-base text-gray-400">Vacancy </p>
//                       <p className="text-lg text-gray-600"> 05</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-[24px] border border-gray-100">
//                 <h4 className="mb-[24px] text-gray-400">Skills</h4>
//                 <div className="flex flex-wrap gap-3 mt-[20px] mb-[40px]">
//                   <p className="flex text-gray-600 bg-gray-100 px-2 py-1 rounded justify-center items-center ">
//                     Web Development
//                     <span className="bg-white w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
//                       <RxCross2 size={20} />
//                     </span>
//                   </p>
//                   <p className="flex text-gray-600 bg-gray-100 px-2 py-1 rounded justify-center items-center ">
//                     User Interface Design
//                     <span className="bg-white w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
//                       <RxCross2 size={20} />
//                     </span>
//                   </p>
//                   <p className="flex text-gray-600 bg-gray-100 px-2 py-1 rounded justify-center items-center ">
//                     HTML
//                     <span className="bg-white w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
//                       <RxCross2 size={20} />
//                     </span>
//                   </p>
//                   <p className="flex text-gray-600 bg-gray-100 px-2 py-1 rounded justify-center items-center ">
//                     HP Programming
//                     <span className="bg-white w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
//                       <RxCross2 size={20} />
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-[120px]">
//           <h1 className="font-semibold text-[32px] py-[40px]">Similar Jobs</h1>
//           <div className="mb-[40px]">
//             <JobItem></JobItem>
//           </div>
//           <div className="text-center">
//             <button className="text-base text-white bg-[#0A65CC] px-[32px] py-[8px] mb-[40px] ">
//               View More
//             </button>
//           </div>
//         </div>
//       </div> */}

//       <div className="px-8 md:px-10 lg:px-[135px] mt-[32px]">
//         <div className="flex flex-col lg:flex-row justify-between gap-[45px]">
//           {/* Left Section */}
//           <div className="flex-1">
//             <div>
//               <h1 className="font-semibold text-2xl mb-4">{job.job_title}</h1>
//               <p className="flex items-center gap-2 font-normal text-base mb-[24px]">
//                 <span>
//                   <CiLocationOn />
//                 </span>
//                 {job.location}
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-[12px] font-normal text-base mb-[24px]">
//               <p className="text-[#9199A3] bg-gray-100 rounded-3xl px-[10px] py-[6px]">
//                 {job.job_type}
//               </p>
//               <p className="text-white bg-[#9199A3] rounded-3xl px-[10px] py-[6px]">
//                 {job.salary_range}
//               </p>
//               <p className="text-[#FF0000] bg-[#FFEDED] rounded-3xl px-[10px] py-[6px]">
//                 Multinational brand
//               </p>
//             </div>

//             {/* Description */}
//             <div className="mt-[40px]">
//               <h1 className="text-xl text-black font-semibold">Description</h1>
//               <p className="text-base text-[#5E6670] mt-2">{job.description}</p>
//               {/* <p className="text-base text-[#18191C] mt-2">
//                 Want to work with us? You're in good company!
//               </p> */}
//             </div>

//             {/* Qualifications */}
//             <div className="mt-[24px]">
//               <h1 className="text-xl text-black font-semibold">
//                 Qualifications
//               </h1>
//               <ul className="list-disc list-inside text-base text-gray-800 space-y-1 mt-2">
//                 {job.qualifications.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Responsibilities */}
//             <div className="mt-[24px]">
//               <h1 className="text-xl text-black font-semibold">
//                 Responsibilities
//               </h1>
//               <ul className="list-disc list-inside text-base text-gray-800 space-y-1 mt-2">
//                 {job.responsibilities.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Benefits */}
//             <div className="mt-[24px]">
//               <h1 className="text-xl text-black font-semibold">Benefits</h1>
//               <ul className="list-disc list-inside text-base text-gray-800 space-y-1 mt-2">
//                 {job.benefits.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-[365px] mt-[40px] lg:mt-0">
//             <div className="flex gap-3 mb-[40px] justify-end">
//               <button
//                 onClick={() => setOpen(true)}
//                 className="text-base text-white bg-blue-600 px-[32px] py-[12px] rounded w-full sm:w-auto"
//               >
//                 Apply now
//               </button>
//               <div className="w-12 h-12 flex items-center justify-center text-blue-600 border-2 border-blue-600 rounded">
//                 <TiBookmark size={24} />
//               </div>
//               <div className="w-12 h-12 flex items-center justify-center text-blue-600 border-2 border-blue-600 rounded">
//                 <FiShare2 size={24} />
//               </div>
//             </div>

//             {/* Job Info Card */}
//             <div className="p-[24px] border border-gray-100 mb-[32px]">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <RiCalendar2Line size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Job Posted</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.posted_on}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <CiTimer size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Deadline</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.deadline}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <RiLayoutGrid2Line size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Level</p>
//                     <p className="text-base text-gray-600">{job.meta.level}</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <FaGraduationCap size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Education</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.education}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <FaBuromobelexperte size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Experience</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.experience}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <IoPersonOutline size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Vacancy</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.vacancy}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Skills Section */}
//             <div className="p-[24px] border border-gray-100">
//               <h4 className="text-gray-400 mb-[16px]">Skills</h4>
//               <div className="flex flex-wrap gap-3">
//                 {job.skills.map((skill, i) => (
//                   <p
//                     key={i}
//                     className="flex text-gray-600 bg-gray-100 px-3 py-1 rounded items-center"
//                   >
//                     {skill}
//                     <span className="bg-white w-5 h-5 rounded flex justify-center items-center ml-2 text-gray-400">
//                       <RxCross2 size={16} />
//                     </span>
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Similar Jobs */}
//         <div className="mt-[80px]">
//           <h1 className="font-semibold text-[28px] py-[32px]">Similar Jobs</h1>
//           <div className="mb-[40px]">
//             {/* <JobItem /> */}
//             {jobs
//               .filter((j) => j.id !== id) // বর্তমান job বাদ দিয়ে
//               .slice(0, 3) // যেকোন ৩টা
//               .map((item) => (
//                 <JobItem key={item.id} job={item} />
//               ))}
//           </div>
//           <div className="text-center">
//             <button className="text-base text-white bg-[#0A65CC] px-[32px] py-[8px] mb-[40px] w-full sm:w-auto">
//               View More
//             </button>
//           </div>
//         </div>

//         {/* Modal */}
//         <ModalContainer isOpen={open} onClose={() => setOpen(false)}>
//           <Modal
//             title="Thanks for your interest!"
//             description="We will review your application and contact you if you're shortlisted."
//             buttonText=""
//           />
//         </ModalContainer>
//       </div>
//     </>
//   );
// }

// import React, { useContext, useState } from "react";
// import { JobContext } from "../../../Context/JobContext";
// import { useParams } from "react-router-dom";

// import { RxBookmark } from "react-icons/rx";
// import { FiShare2 } from "react-icons/fi";
// import { FaGraduationCap, FaBuromobelexperte } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { TiBookmark } from "react-icons/ti";
// import ModalContainer from "../../modal/ModalContainer";
// import Modal from "../../modal/ModalRegistration";
// import { RiCalendar2Line, RiLayoutGrid2Line } from "react-icons/ri";

// import { CiLocationOn, CiTimer } from "react-icons/ci";
// import { IoPersonOutline } from "react-icons/io5";
// import JobItem from "../../shared/JobItem";
// import BannerProfile from "../../shared/banner/BannerProfile";

// export default function JobDetails() {
//   const [open, setOpen] = useState(false);

//   const { id } = useParams();
//   const { jobs } = useContext(JobContext);

//   const job = jobs.find((j) => j.id === id);

//   if (!job) {
//     return (
//       <div className="text-center text-red-500 mt-20 text-xl">
//         Job not found
//       </div>
//     );
//   }

//   return (
//     <>
//       <BannerProfile />

//       <div className="px-4 md:px-8 lg:px-[135px] mt-[32px]">
//         <div className="flex flex-col lg:flex-row justify-between gap-[45px]">
//           {/* Left Section */}
//           <div className="flex-1">
//             <div>
//               <h1 className="font-semibold text-2xl mb-4">{job.job_title}</h1>
//               <p className="flex items-center gap-2 font-normal text-base mb-[24px]">
//                 <span>
//                   <CiLocationOn />
//                 </span>
//                 {job.location}
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-[12px] font-normal text-base mb-[24px]">
//               <p className="text-[#9199A3] bg-gray-100 rounded-3xl px-[10px] py-[6px]">
//                 {job.job_type}
//               </p>
//               <p className="text-white bg-[#9199A3] rounded-3xl px-[10px] py-[6px]">
//                 {job.salary_range}
//               </p>
//               <p className="text-[#FF0000] bg-[#FFEDED] rounded-3xl px-[10px] py-[6px]">
//                 Multinational brand
//               </p>
//             </div>

//             {/* Description */}
//             <div className="mt-[40px]">
//               <h1 className="text-xl text-black font-semibold">Description</h1>
//               <p className="text-base text-[#5E6670] mt-2">{job.description}</p>
//             </div>

//             {/* Qualifications */}
//             <div className="mt-[24px]">
//               <h1 className="text-xl text-black font-semibold">
//                 Qualifications
//               </h1>
//               <ul className="list-disc list-inside text-base text-gray-800 space-y-1 mt-2">
//                 {job.qualifications.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Responsibilities */}
//             <div className="mt-[24px]">
//               <h1 className="text-xl text-black font-semibold">
//                 Responsibilities
//               </h1>
//               <ul className="list-disc list-inside text-base text-gray-800 space-y-1 mt-2">
//                 {job.responsibilities.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Benefits */}
//             <div className="mt-[24px]">
//               <h1 className="text-xl text-black font-semibold">Benefits</h1>
//               <ul className="list-disc list-inside text-base text-gray-800 space-y-1 mt-2">
//                 {job.benefits.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-[365px] mt-[40px] lg:mt-0">
//             <div className="flex flex-wrap items-center justify-between gap-3 mb-[40px]">
//               <button
//                 onClick={() => setOpen(true)}
//                 className="text-base text-white bg-blue-600 px-[32px] py-[12px] rounded w-full sm:w-auto flex-grow"
//               >
//                 Apply now
//               </button>
//               <div className="flex gap-3">
//                 <div className="w-12 h-12 flex items-center justify-center text-blue-600 border-2 border-blue-600 rounded">
//                   <TiBookmark size={24} />
//                 </div>
//                 <div className="w-12 h-12 flex items-center justify-center text-blue-600 border-2 border-blue-600 rounded">
//                   <FiShare2 size={24} />
//                 </div>
//               </div>
//             </div>

//             {/* Job Info Card */}
//             <div className="p-[24px] border border-gray-100 mb-[32px]">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <RiCalendar2Line size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Job Posted</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.posted_on}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <CiTimer size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Deadline</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.deadline}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <RiLayoutGrid2Line size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Level</p>
//                     <p className="text-base text-gray-600">{job.meta.level}</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <FaGraduationCap size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Education</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.education}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <FaBuromobelexperte size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Experience</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.experience}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 text-blue-600">
//                   <IoPersonOutline size={28} />
//                   <div>
//                     <p className="text-sm text-gray-400">Vacancy</p>
//                     <p className="text-base text-gray-600">
//                       {job.meta.vacancy}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Skills Section */}
//             <div className="p-[24px] border border-gray-100">
//               <h4 className="text-gray-400 mb-[16px]">Skills</h4>
//               <div className="flex flex-wrap gap-3">
//                 {job.skills.map((skill, i) => (
//                   <p
//                     key={i}
//                     className="flex text-gray-600 bg-gray-100 px-3 py-1 rounded items-center"
//                   >
//                     {skill}
//                     <span className="bg-white w-5 h-5 rounded flex justify-center items-center ml-2 text-gray-400">
//                       <RxCross2 size={16} />
//                     </span>
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Similar Jobs */}
//         <div className="mt-[80px]">
//           <h1 className="font-semibold text-[28px] py-[32px]">Similar Jobs</h1>
//           <div className="mb-[40px]">
//             {jobs
//               .filter((j) => j.id !== id)
//               .slice(0, 3)
//               .map((item) => (
//                 <JobItem key={item.id} job={item} />
//               ))}
//           </div>
//           <div className="text-center">
//             <button className="text-base text-white bg-[#0A65CC] px-[32px] py-[8px] mb-[40px] w-full sm:w-auto">
//               View More
//             </button>
//           </div>
//         </div>

//         {/* Modal */}
//         <ModalContainer isOpen={open} onClose={() => setOpen(false)}>
//           <Modal
//             title="Thanks for your interest!"
//             description="We will review your application and contact you if you're shortlisted."
//             buttonText=""
//           />
//         </ModalContainer>
//       </div>
//     </>
//   );
// }

import React, { useContext, useState } from "react";
import { JobContext } from "../../../Context/JobContext";
import { useParams } from "react-router-dom";

import { RxBookmark } from "react-icons/rx";
import { FiShare2 } from "react-icons/fi";
import { FaGraduationCap, FaBuromobelexperte } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TiBookmark } from "react-icons/ti";
import ModalContainer from "../../modal/ModalContainer";
import Modal from "../../modal/ModalRegistration";
import { RiCalendar2Line, RiLayoutGrid2Line } from "react-icons/ri";

import { CiLocationOn, CiTimer } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import JobItem from "../../shared/JobItem";
import BannerProfile from "../../shared/banner/BannerProfile";

export default function JobDetails() {
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const { jobs } = useContext(JobContext);

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="text-center text-red-500 mt-20 text-xl">
        Job not found
      </div>
    );
  }

  return (
    <>
      <BannerProfile />

      <div className="px-4 md:px-8 lg:px-[135px] mt-[32px]">
        <div className="flex flex-col lg:flex-row justify-between gap-[45px]">
          {/* Left Section */}
          <div className="flex-1">
            <div>
              <h1 className="font-semibold text-2xl mb-4">{job.job_title}</h1>
              <p className="flex items-center gap-2 font-normal text-base mb-[24px]">
                <span>
                  <CiLocationOn />
                </span>
                {job.location}
              </p>
            </div>

            <div className="flex flex-wrap gap-[12px] font-normal text-base mb-[24px]">
              <p className="text-[#9199A3] bg-gray-100 rounded-3xl px-[10px] py-[6px]">
                {job.job_type}
              </p>
              <p className="text-white bg-[#9199A3] rounded-3xl px-[10px] py-[6px]">
                {job.salary_range}
              </p>
              <p className="text-[#FF0000] bg-[#FFEDED] rounded-3xl px-[10px] py-[6px]">
                Multinational brand
              </p>
            </div>

            {/* Description */}
            <div className="mt-[40px]">
              <h1 className="text-xl text-black font-semibold">Description</h1>
              <p className="text-base text-[#5E6670] mt-2">{job.description}</p>
            </div>

            {/* Qualifications */}
            <div className="mt-[24px]">
              <h1 className="text-xl text-black font-semibold">
                Qualifications
              </h1>
              <ul className="list-disc list-inside text-base text-gray-800 space-y-1 mt-2">
                {job.qualifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mt-[24px]">
              <h1 className="text-xl text-black font-semibold">
                Responsibilities
              </h1>
              <ul className="list-disc list-inside text-base text-gray-800 space-y-1 mt-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mt-[24px]">
              <h1 className="text-xl text-black font-semibold">Benefits</h1>
              <ul className="list-disc list-inside text-base text-gray-800 space-y-1 mt-2">
                {job.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[365px] mt-[40px] lg:mt-0">
            {/* Buttons Section */}
            <div className="flex items-center justify-between lg:justify-end gap-3 mb-[40px]">
              <button
                onClick={() => setOpen(true)}
                className="text-base text-white bg-blue-600 px-[32px] py-[12px] rounded w-full lg:w-auto"
              >
                Apply now
              </button>
              <div className="flex gap-3">
                <div className="w-12 h-12 flex items-center justify-center text-blue-600 border-2 border-blue-600 rounded">
                  <TiBookmark size={24} />
                </div>
                <div className="w-12 h-12 flex items-center justify-center text-blue-600 border-2 border-blue-600 rounded">
                  <FiShare2 size={24} />
                </div>
              </div>
            </div>

            {/* Job Info Card */}
            <div className="p-[24px] border border-gray-100 mb-[32px]">
              <div className="grid grid-cols-2 gap-[24px]">
                <div className="flex flex-col items-start  gap-2 text-blue-600">
                  <RiCalendar2Line size={28} />
                  <div>
                    <p className="text-sm text-gray-400">Job Posted</p>
                    <p className="text-base text-gray-600">
                      {job.meta.posted_on}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 text-blue-600">
                  <CiTimer size={28} />
                  <div>
                    <p className="text-sm text-gray-400">Deadline</p>
                    <p className="text-base text-gray-600">
                      {job.meta.deadline}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 text-blue-600">
                  <RiLayoutGrid2Line size={28} />
                  <div>
                    <p className="text-sm text-gray-400">Level</p>
                    <p className="text-base text-gray-600">{job.meta.level}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 text-blue-600">
                  <FaGraduationCap size={28} />
                  <div>
                    <p className="text-sm text-gray-400">Education</p>
                    <p className="text-base text-gray-600">
                      {job.meta.education}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 text-blue-600">
                  <FaBuromobelexperte size={28} />
                  <div>
                    <p className="text-sm text-gray-400">Experience</p>
                    <p className="text-base text-gray-600">
                      {job.meta.experience}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 text-blue-600">
                  <IoPersonOutline size={28} />
                  <div>
                    <p className="text-sm text-gray-400">Vacancy</p>
                    <p className="text-base text-gray-600">
                      {job.meta.vacancy}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="p-[24px] border border-gray-100">
              <h4 className="text-gray-400 mb-[16px]">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill, i) => (
                  <p
                    key={i}
                    className="flex text-gray-600 bg-gray-100 px-3 py-1 rounded items-center"
                  >
                    {skill}
                    <span className="bg-white w-5 h-5 rounded flex justify-center items-center ml-2 text-gray-400">
                      <RxCross2 size={16} />
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Jobs */}
        <div className="mt-[80px]">
          <h1 className="font-semibold text-[28px] py-[32px]">Similar Jobs</h1>
          <div className="mb-[40px]">
            {/* {jobs
              .filter((j) => j.id !== id)
              .slice(0, 3)
              .map((item) => (
                <JobItem key={item.id} job={item} />
              ))} */}
            {jobs
              .filter((j) => j.id !== id) // দুইটাই string
              .slice(0, 3)
              .map((item) => (
                <JobItem key={item.id} job={item} />
              ))}
          </div>
          <div className="text-center">
            <button className="text-base text-white bg-[#0A65CC] px-[32px] py-[8px] mb-[40px] w-full sm:w-auto">
              View More
            </button>
          </div>
        </div>

        {/* Modal */}
        <ModalContainer isOpen={open} onClose={() => setOpen(false)}>
          <Modal
            title="Thanks for your interest!"
            description="We will review your application and contact you if you're shortlisted."
            buttonText=""
          />
        </ModalContainer>
      </div>
    </>
  );
}
