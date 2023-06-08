import React from 'react'

const LoiBanner = () => {
  return (
    <div className="WhoAreWe" id="About">
      <div className="flex flex-row w-full h-52">
        <div className=' flex justify-center w-3/6 text-white items-center'>
          <div className='Heading uppercase text-3xl text-center text-white font-black pl-[150px]'>
            LETTER <span className="Heading-overlay">OF INTENT</span> 
          </div>
        </div>
        <div className=' flex flex-col w-3/6 pl-[575px] xl:pl-[105px] lg:pl-[105px] md:pl-[105px] sm:pl-[45px] max-sm:pl-[10px]'>
          <div className='h-1/2 flex flex-row justify-start items-center'>
            <div className='text-7xl pr-[12px] text-white font-extrabold'>
              20+
            </div>
            <div className='text-xl text-orange-400 font-extrabold'>
              SIGNED
            </div>
          </div>
          <div className='h-1/2 flex flex-row justify-start items-center'>
            <div className='text-7xl pr-[12px] text-white font-extrabold'>
              40+
            </div>
            <div className='text-xl text-orange-400 font-extrabold'>
              WAITLIST
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoiBanner