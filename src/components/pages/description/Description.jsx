import React from 'react'
import descriptionBG from "../../../assets/details.png"
import PC from "../../../assets/pc.png"
import { RxBookmark } from "react-icons/rx";
import { FiShare2 } from "react-icons/fi";
import { FaGraduationCap, FaBuromobelexperte } from "react-icons/fa";

import { RiCalendar2Line, RiLayoutGrid2Line } from "react-icons/ri";

import { CiLocationOn, CiTimer } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";




export default function () {
    return (
        <div>

            <div className=" bg-center w-full h-[458px]"
                style={{ backgroundImage: `url(${descriptionBG})` }}>
                <div className='flex'>
                    <h1 className='text-[56px] font-bold text-white'>
                        Software <br />
                        Administrator
                    </h1></div>
                <div className='w-[684px] h-[160px]'>
                    {/* <img className='' src={PC} alt=""  /> */}
                </div>

            </div>


            <div className='flex justify-between gap-[45px] px-[135px] mt-[32px]'>

                <div>
                    <div>


                        <h1 className='font-semibold text-2xl'>Hemp Co. Ltd</h1>
                        <p className='flex items-center font-normal  text-base mb-[24px]'><span><CiLocationOn />
                        </span>
                            Mirpur, Dhaka</p>

                    </div>


                    <div className='flex gap-[18px] font-normal text-base'>
                        <p className=' text-[#9199A3] bg-[#F1F2F4] rounded-3xl px-[10px] py-[6px]'>Full-Time </p>
                        <p className=' text-white bg-[#9199A3] rounded-3xl px-[10px] py-[6px]'>$ 1500 - $ 2000</p>
                        <p className=' text-[#FF0000] bg-[#F1F2F4] rounded-3xl px-[10px] py-[6px]'>Multinational brand</p>
                    </div>


                    <div>
                        <div className='mt-[40px]'>
                            <h1 className='text-xl text-black font-semibold'>Description</h1>
                            <p className='text-base text-[#5E6670]'>As a Software Administrator, you will be responsible for managing, maintaining, and optimizing software systems within our organization. You will play a critical role in ensuring that our software infrastructure operates efficiently and effectively to support our business objectives. This position requires strong technical expertise, problem-solving skills, and the ability to work collaboratively with cross-functional teams.</p>
                            <p className='text-base text-[#18191C]'>Want to work with us? You're in good company!</p>
                        </div>
                        <div className='mt-[15px]'>
                        <h1 className='text-xl text-black font-semibold'>Qualifications</h1>
<ul className="list-disc list-inside text-base text-gray-800 ">
  <li>Bachelor’s degree in Computer Science, Information Technology, or a related field.</li>
  <li>Proven experience as a Software Administrator or similar role.</li>
  <li>Proficiency in software installation, configuration, and troubleshooting.</li>
  <li>Strong knowledge of operating systems, databases, and networking concepts.</li>
  <li>Familiarity with software deployment tools and version control systems.</li>
  <li>Excellent analytical and problem-solving skills.</li>
  <li>Effective communication and interpersonal abilities.</li>
  <li>Attention to detail and ability to work independently as well as part of a team.</li>
</ul>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex mb-[40px]'>
                        <div> <button className='text-base text-white bg-[#0A65CC] px-[48px] py-[12px] ms-[8px]'>
                            Apply now
                        </button></div>
                        <div className='text-[#0A65CC] text-2xl border border-[#0A65CC] px-[17px] py-[6px] mx-[12px]'>
                            <RxBookmark />
                        </div>
                        <div className='text-[#0A65CC] text-2xl border border-[#0A65CC] px-[17px] py-[6px]'><FiShare2 />
                        </div>
                    </div>

                    <div className='p-[24px] border border-red-500'>
                        <div className='grid grid-cols-2 gap-[24px] '>
                            <div className=''>
                                <RiCalendar2Line />

                                <p>Job Posted</p>
                                <p> March 02, 2024</p>
                            </div>
                            <div className=''>
                                <CiTimer />

                                <p>Job Posted</p>
                                <p> March 02, 2024</p>
                            </div>
                            <div className=''>
                                <RiLayoutGrid2Line />
                                <p>Job Posted</p>
                                <p> March 02, 2024</p>
                            </div>
                            <div className=''>
                                <FaGraduationCap />

                                <p>Job Posted</p>
                                <p> March 02, 2024</p>
                            </div>
                            <div className=''>
                                <FaBuromobelexperte />
                                <p>Job Posted</p>
                                <p> March 02, 2024</p>
                            </div>
                            <div className=''>
                                <IoPersonOutline />
                                <p>Job Posted</p>
                                <p> March 02, 2024</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
