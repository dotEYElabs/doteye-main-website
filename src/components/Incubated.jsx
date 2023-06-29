import React from 'react'
import iim_ncr_logo from '../assets/images/iim_nsr_logo.png'
import startupIndia from '../assets/images/startup-india.svg'
import dpiit from '../assets/images/DPIIT.png'

const Incubated = () => {
  return (
    <div className='FutureLine pt-[10px] w-full h-[225px] xl:h-[220px] lg:h-[220px] md:h-[220px] sm:h-[220px] xs:h-[570px] px-[5px] flex items-center flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col '>
        <div className='w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 xs:w-full flex flex-col pb-[12px]'>
          <div className='flex justify-center items-center text-black Heading uppercase text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl'>
              Pre-Incubated <span className="Heading-overlay pl-[5px]"> BY</span> 
          </div>
          <div className='flex justify-center items-center'>
              <img className='bg-white w-[330px] xl:w-[300px] lg:w-[300px] md:w-[300px] sm:w-[300px] xs:w-[220px] h-[130px] xl:h-[110px] lg:h-[110px] md:h-[110px] sm:h-[10px] xs:h-[115px]' src={iim_ncr_logo} alt="" />
          </div>
        </div> 
        <div className='w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 xs:w-full flex justify-center pb-[12px]'>
          <img className='bg-stone-200 w-[220px] h-[210px] bg-white' src={startupIndia} alt="" />
        </div>
        <div className='w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 xs:w-full flex justify-center'>
          <img className='bg-stone-200 w-[220px] h-[180px] bg-white' src={dpiit} alt="" />
        </div>
    </div>
  )
}

export default Incubated