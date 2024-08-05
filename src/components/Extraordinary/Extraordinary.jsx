"use client"

import Link from 'next/link'
import React from 'react'
// 
import AnimationOne from "media/extraordinary-two.gif"
import AnimationTwo from "media/extraordinary-one.gif"
import Image from 'next/image';

const Extraordinary = ({ content }) => {
    const {title, para} = content

    return (
        <>
            <section className='pt-[30px] md:pt-[70px] relative bg-[#fbfbfb]'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[20px] md:text-[25px] lg:text-[28px] xl:text-[36px] font-sans font-bold capitalize text-center text-black mb-2 sm:mb-6'>{title}</h2>
                            <p className='text-[13px] sm:text-[17px] leading-[21px] font-sans text-center text-black lg:w-9/12 mx-auto mb-10'>{para}</p>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <div className="btns">
                                    <Link class="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-[318px] h-[44px] poppins flex items-center justify-center" href="javascript:;">Make an Animation</Link>
                                </div>
                                <div className="btns">
                                    <Link class="text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] w-[318px] md:w-[214px] h-[44px] shadow-2xl poppins flex items-center justify-center" href="javascript:;">Live Chat</Link>
                                </div>
                                <div className="flex items-center justify-between gap-x-4 mt-[48px] lg:mt-0">
                                    <Image src={AnimationOne} alt='Cloud Studios Inc' width={550} height={550} className='w-5/12 lg:w-5/12' />
                                    <Image src={AnimationTwo} alt='Cloud Studios Inc' width={550} height={550} className='lg:mb-[-110px] relative z-0 w-5/12 lg:w-5/12' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Extraordinary
