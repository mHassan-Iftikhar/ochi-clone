import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-[70vh] bg-[#F1F1F1] flex gap-4 px-22'>
        <div className="cardContainer w-1/2">
            <div className="relative card w-[43vw] h-[50vh] bg-[#004D43] rounded-xl flex items-center justify-center">
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 text-[#CDEA68] tracking-tighter border-1 left-8 bottom-8 rounded-full'>©2019-2020</button>
            </div>
        </div>
        <div className="cardContainer w-1/2 flex gap-4">
            <div className="relative card w-[22vw] h-[50vh] bg-[#212121] rounded-xl flex items-center justify-center">
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 text-[#F1F1F1] tracking-tighter border-1 left-8 bottom-8 rounded-full'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="relative card w-[22vw] h-[50vh] bg-[#212121] rounded-xl flex items-center justify-center">
                <img className='w-25' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 text-[#F1F1F1] tracking-tighter border-1 left-8 bottom-8 rounded-full'>BUSINESS BOOTCAMP ALUMINI</button>
            </div>
        </div>  
    </div>
  )
}

export default Cards