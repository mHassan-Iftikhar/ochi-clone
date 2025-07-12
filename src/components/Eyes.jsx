import { useEffect, useState } from "react"

const Eyes = () => {

    const [rotate, setRotate] = useState(0)

    useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;

        let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
        setRotate(angle-180);
      })
    })
    

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.9" className='relative flex items-center justify-center w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='absolute w-1/2 flex justify-center gap-10'>
                <div className='w-[14vw] h-[14vw] bg-zinc-100 rounded-full flex justify-center items-center'>
                    <div className='relative w-33 h-33 rounded-full bg-[#212121] flex justify-center items-center'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg`}} className='line absolute top-1/2 left-1/2 -translate[-50%, -50%] w-full h-6'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[14vw] h-[14vw] bg-zinc-100 rounded-full flex justify-center items-center'>
                    <div className='relative w-35 h-35 rounded-full bg-[#212121]'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg`}} className='line absolute top-1/2 left-1/2 -translate[-50%, -50%] w-full h-6'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes