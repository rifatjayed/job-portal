import React from 'react'

import Search from '../../shared/Search'
import jobBg from "../../../assets/jobbg.png"
import { RxCross2 } from "react-icons/rx";


export default function JobSearch() {
    return (
        <div>

            <div className=" bg-center w-full h-[458px]"
                style={{ backgroundImage: `url(${jobBg})` }}>
                <div className='flex flex-col justify-center items-center h-full'>
                    <h1 className='font-bold text-[40px] text-white'>Search your Dream Job</h1>
                    <p className='text-base text-white text-center'>Discover your next career opportunity at globally <br />
                        renowned organizations.</p>
                    <Search></Search>
                </div>

            </div>
            <div className='flex'>
                <div className='w-[375px] bg-[#F1F2F4] ps-[50px] pt-[80px] pr-[24px]'>
                    <h3 className='text-xl font-semibold pb-[40px]'>Filter by</h3>

                    <div>
                        <h4 className='font-medium text-lg'>Active filters</h4>
                        <div className='flex flex-wrap gap-3 mt-[20px] mb-[40px]'>
                            <p className='flex text-base bg-white p-1 justify-center items-center '>Last 30 days
                                <span className='bg-[#F1F2F4] ml-[8px]'>
                                    <RxCross2 />
                                </span>

                            </p>
                            <p className='flex text-base bg-white p-1 justify-center items-center '>Internship
                                <span className='bg-[#F1F2F4] ml-[8px]'><RxCross2 /> </span>
                            </p>
                            <p className='flex text-base bg-white p-1 justify-center items-center '>Trade
                                <span className='bg-[#F1F2F4] ml-[8px]'><RxCross2 /> </span>
                            </p>
                            <p className='flex text-base bg-white p-1 justify-center items-center '>Managing Director
                                <span className='bg-[#F1F2F4] ml-[8px]'><RxCross2 /> </span>
                            </p>

                        </div>
                    </div>
                    <div>
                        <h4 className='font-medium text-lg'>Date posted</h4>
                        <div className='flex flex-wrap gap-3 mt-[20px] mb-[40px]'>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Last 24 hours (69)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Last 7 days (05)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Last 14 days  (67)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Last 21 days  (09)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Last 30 days  (19)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Any time (14)</span>
                            </label>

                        </div>
                    </div>
                    <div>
                        <h4 className='font-medium text-lg'>Job type</h4>
                        <div className='flex flex-wrap gap-3 mt-[20px] mb-[40px]'>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Full-time (09)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Part-Time (15)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Remote (06)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Temporary (15)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Internship (11)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                                <span className="text-[#515B6F] text-base ms-[16px]">Contract base (06)</span>
                            </label>

                        </div>
                    </div>
                </div>
                <div className='ps-[40px] pt-[80px] pr-[135px] w-full'>
                    <div className='flex justify-between items-center w-full'>
                        <div>
                            <h2 className='text-2xl font-semibold'>All Jobs</h2>
                            <p className='text-base font-normal'>Filtered 9865 jobs</p>
                        </div>
                        <div>
                            <h2>Sorted by: <span>Date</span></h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
