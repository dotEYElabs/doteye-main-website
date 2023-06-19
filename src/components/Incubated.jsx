import React from 'react'
import iim_ncr_logo from '../assets/images/iim_nsr_logo.png'

const Incubated = () => {
  return (
    <div className='FutureLine flex flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col px-[200px] xl:px-[100px] lg:px-[180px] md:px-[110px] sm:px-[20px] xs:px-[0px] w-full h-[150px]'>
        <div className='w-3/6 flex justify-start items-center text-white Heading uppercase text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl xs:text-[20px] pl-[575px] xl:pl-[100px] lg:pl-[40px] md:pl-[0px] justify-center w-full sm:pl-[0px] justify-center w-full xs:pl-[0px]'>
            Pre-Incubated <span className="Heading-overlay pl-[5px]"> BY</span> 
        </div>
        <div className='w-3/6 flex justify-start xl:justify-start items-center pl-[275px] xl:pl-[0px] lg:pl-[0px] md:pl-[40px] justify-center w-full sm:pl-[45px] justify-center w-full xs:pl-[0px]'>
            <img className='bg-stone-200 w-[330px]' src={iim_ncr_logo} alt="" />
        </div>
    </div>
  )
}

export default Incubated