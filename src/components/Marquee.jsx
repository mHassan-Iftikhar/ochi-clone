import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".13" className='w-full py-10 bg-[#004D43] rounded-t-2xl'>
        <div className="text border-t-1 border-b-1 border-zinc-300 flex items-center justify-center whitespace-nowrap overflow-hidden mt-18 mb-18">
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 8}} className='text-[30vw] font-semibold text-white leading-none font-[Founders_Grotesk_X] mt-3 -mb-40 pr-20'>WE ARE OCHII</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 8}} className='text-[30vw] font-semibold text-white leading-none font-[Founders_Grotesk_X] mt-3 -mb-40 pr-20'>WE ARE OCHII</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[30vw] font-semibold text-white leading-none font-[Founders_Grotesk_X] mt-3 -mb-40 pr-20'>WE ARE OCHII</motion.h1>
        </div>
    </div>
  )
}

export default Marquee