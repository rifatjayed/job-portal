import React from 'react'
// import jobIcon from "../../../assets/"
import jobIcon from "../../assets/Group.png";
import {  RxBookmark } from "react-icons/rx";

export default function JobItem() {
  return (
          <div>
                            <div className='flex p-[24px]  shadow-[2px_2px_0px_0px_rgba(0,_0,_0,_0.1)] justify-between mt-[40px]'>
                                <div className=''>
                                    <div className='flex'>
                                        <div>
                                            <img className='' src={jobIcon} />
                                        </div>
                                        <div className='grid gap-[8px] ms-[24px]'>
                                            <h1 className='text-xl font-semibold'>Senior UI Designer</h1>
                                            <div className='flex font-normal text-[#5E6670]'>
                                                <p className='text-base'>Creative Solutions |</p>
                                                <p className='text-base'>Uttara, Dhaka</p>
                                            </div>
    
                                            <div className='flex font-normal gap-1'>
                                                <p className='text-sm text-[#9199A3] bg-[#F1F2F4] rounded-3xl px-[10px] py-[6px]'>Full-Time </p>|
                                                <p className='text-base text-[#0A65CC] border border-[#0A65CC] rounded-3xl px-[10px] py-[6px]'>$ 1500 - $ 2000</p>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                                <div>
                                    <div className='text-right'>
                                     <p className='w-[204px] h-[6px] bg-[#9199A3] ms-auto'>
    
                                    </p>
                                    <p className='font-normal text-base text-[#5E6670] mb-[20px]'>10 applicants on 200 posts</p>   
                                    </div>
                                    
                                    <div className='flex justify-between'>
                                        <button className='text-[#0A65CC] text-2xl border border-[#0A65CC] px-[17px] py-[6px] '>
                                            <RxBookmark />
    
                                        </button>
                                        <button className='text-base text-white bg-[#0A65CC] px-[48px] py-[12px] ms-[8px]'>
                                            Apply now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}
