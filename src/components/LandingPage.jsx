import React from 'react'
import { GoArrowRight } from "react-icons/go";
import '../components/LandingPage'
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" className='w-full h-screen bg-[#F1F1F1] pt-1'>
        <div className="textStructure mt-50 px-15">
          {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((text, index) => (
            <h1 key={index} className="h-full text-[9vw] uppercase font-semibold text-[#212121] font-['Founders_Grotesk_X'] leading-[4vw] flex items-center gap-2">
              {index === 1 ? 
              <motion.div
                initial={{width: 0}} 
                animate={{width: "9vw"}} 
                transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                className='relative w-36 h-22 bg-[#004D43] rounded mb-13'>
              </motion.div> : null}
              {text}
            </h1>
          ))}
        </div>
        <div className='border-t-2 border-zinc-300 mt-25 font-["Neue Montreal"] flex justify-between items-center px-20 py-5'>    
          {["For public and private companies", "From the first pitch to IPO"].map((text, index) => (
            <div key={index} className="text-md tracking-tighter leading-none">
              {text}
            </div>
          ))}
          <div className="start flex items-center gap-3">
            <div className='px-4  py-1 border-1 rounded-full uppercase'>Start the project</div>
            <div className='w-8 h-8 border-black border rounded-full flex justify-center items-center'><GoArrowRight className='w-5 h-5'/></div>
          </div>
        </div>                  
    </div>
  )
}

export default LandingPage