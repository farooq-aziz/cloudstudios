import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Assisted = () => {
    const banVideo = [
        [
            "https://player.vimeo.com/progressive_redirect/playback/913404582/rendition/720p/file.mp4?loc=external&log_user=0&signature=fb7ea9f370c1d99717d02f8e809c585e0668181fdd1411f3d4322da785685a8a",
        ]
    ];
    return (
        <>
            <section className='bg-[#00C6F9] py-[30px] md:py-[70px] relative'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="lg:py-[70px] xl:py-[120px] relative z-50">
                                <h2 className='text-[25px] sm:text-[40px] lg:text-[50px] leading-tight md:leading-[40px] lg:leading-[55px] font-bold font-sans mb-3 text-white'>We Connect Gaps & We Smash Boundaries Through Animation.</h2>
                                <p className='text-[13px] sm:text-[16px] font-sans leading-[20px] mb-3 text-white'>Pushing the boundaries of what's possible in the world of visual communication – our robust team of artists, animators' engineers, and narrative experts converge their expertise with cutting-edge technology, imbuing cinematic storytelling to deliver videos beyond the ordinary. From utilizing the power of industry-leading animation software to the perfect infusion of immersive visual production schematics and real-time rendering engines delivering visually stunning, emotionally resonant content – Cloud Studios Inc. is the ultimate frontier for video animation and beyond.</p>
                                <p className='text-[13px] sm:text-[16px] font-sans leading-[20px] mb-3 text-white'>Our studio makes brands come to life from procedural animation techniques that imbue our characters with lifelike fluidity to dynamic simulations that bring even the most phantastic environments to vivid reality. Our resource augmentation solutions and collaborative approach make us the number-one choice for video animation solutions from the west coast to the east coast. We love animation, we love video and yes, we love cinematics!</p>

                                <div className="btn mt-8">
                                    <Link href="javascript:;" class="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-full sm:w-[320px] h-[44px] poppins flex items-center justify-center" >Make an Animation</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            {banVideo.map((item, index) => (
                                <div key={index}>
                                    <video className='lg:absolute right-0 h-full top-0' loop={true} muted="muted" autoPlay src={item}></video>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Assisted
