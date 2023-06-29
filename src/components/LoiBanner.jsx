import React from 'react'

const LoiBanner = () => {
  return (
    <div className="WhoAreWe" id="LoiBanner">
      <div className="flex flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col w-full h-52 xl:h-52 lg:h-52 md:h-52 sm:h-52 xs:h-28">
        <div className='flex justify-center w-3/6 xl:w-3/6 lg:w-3/6 md:w-3/6 sm:w-3/6 xs:w-full text-white items-center'>
          <div className='Heading uppercase text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl xs:text-[20px] pt-[4px] text-center text-black font-black pl-[150px] xl:pl-[150px] lg:pl-[150px] md:pl-[105px] sm:pl-[45px] xs:pl-[0px]'>
            LETTER <span className="Heading-overlay">OF INTENT</span> 
          </div>
        </div>
        <div className='flex flex-col w-3/6 xl:w-3/6 lg:w-3/6 md:w-3/6 sm:w-3/6 xs:w-full pl-[575px] xl:pl-[105px] lg:pl-[105px] md:pl-[105px] sm:pl-[45px] xs:pl-[0px]'>
          <div className='h-1/2 flex flex-row justify-start lg:justify-start md:justify-start sm:justify-start xs:justify-center items-center'>
            <div className='text-7xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-5xl xs:text-[25px] pr-[12px] text-black font-extrabold'>
              20+
            </div>
            <div className='text-xl text-orange-400 font-extrabold'>
              SIGNED
            </div>
          </div>
          <div className='h-1/2 flex flex-row justify-start lg:justify-start md:justify-start sm:justify-start xs:justify-center items-center'>
            <div className='text-7xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-5xl xs:text-[25px] pr-[12px] text-black font-extrabold'>
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