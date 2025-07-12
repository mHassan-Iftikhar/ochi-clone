import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.25" className='w-full p-20 bg-[#CDEA68] rounded-t-3xl'>
        <h1 className='pb-20 pr-50 font-["Neue_Montreal"] text-[55px] leading-13 tracking-tight'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full border-t-1'>
        <div className='w-full flex pr-30 pt-5 pb-25 justify-between'>
            <div className="left">What you can expect:</div>
            <div className="right w-150">
                <div className="top w-70">
                    We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
                </div>
                <div className="bottom flex justify-between mt-10">
                    <div className="innerLeft w-70">
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </div>
                    <div className="innerRight">
                        <ul>
                            <li>Instagram</li>
                            <li>Behance</li>
                            <li>Facebook</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='w-full flex border-t-1 pt-4'>
            <div className='w-1/2'>
                <h1 className='text-[50px] pb-4'>Our approach:</h1>
                    <button className='px-8 py-4 bg-[#212121] text-white rounded-4xl uppercase flex items-center gap-5'>Read More<div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
            </div>
        <div className='w-1/2 h-[70vh] bg-[#b1c860] rounded-xl'></div>
        </div>
    </div>
  )
}

export default About