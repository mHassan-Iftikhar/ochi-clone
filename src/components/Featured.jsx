import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {

    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({y: "0"});
    };
    const handleHoverEnd = (index) => {
        cards[index].start({y: "100%"});
    }

  return (
    <div className='w-full py-10'>
        <div className='border-b-[1px] w-full px-20 border-zinc-400 pb-10'>
            <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
            <div className="cards w-full flex gap-4 mt-20">
                <motion.div 
                    onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className="cardContainer relative w-1/2 h-[80vh] rounded-lg">
                    <div className="card w-full h-full">
                        <h1 className='absolute flex overflow-hidden -translate-x-1/2 left-full top-1/2 -translate-y-1/2 z-[9] leading-none pt-10 text-[#CDEA68] font-semibold font-[Founders_Grotesk_X] text-9xl uppercase'>
                            {"SALIENCELABS".split('').map((item, index) => (
                                <motion.span 
                                    initial={{y: "100%"}} 
                                    animate={cards[0]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                    className="inline-block">{item}
                                </motion.span>
                            ))}
                        </h1>
                        <img className='rounded-lg w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
                    </div>
                </motion.div>
                <motion.div
                onHoverStart={() => handleHover(1)}
                onHoverEnd={() => handleHoverEnd(1)}
                className="cardContainer relative w-1/2 h-[80vh] rounded-lg">
                    <div className='card w-full h-full'>
                        <h1 className='absolute flex overflow-hidden translate-x-1/2 right-full bottom-1/2 translate-y-1/2 z-[9] leading-none pt-10 text-[#CDEA68] font-semibold font-[Founders_Grotesk_X] text-9xl uppercase'>
                            {"CARDBOARD".split('').map((item, index) => (
                                <motion.span 
                                    initial={{y: "100%"}} 
                                    animate={cards[1]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                    className="inline-block">{item}
                                </motion.span>
                            ))}
                        </h1>
                        <img className='rounded-lg w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  ) 
}

export default Featured