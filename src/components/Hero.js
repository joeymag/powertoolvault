import React from 'react'
import Image from 'next/image'
import tstrade from '../../public/tstrade.png'
import HeroImage  from '../../public/Image.svg'

export default function Hero() {
  return (
    <div className='pt-4'>
        <div className='px-[20px]'>
            <h1 className='text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]'>Hero</h1>
            <p className='text-center text-[16px] leading-[24px] text-gray-500'>Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!. </p>
         <div className='flex w-full pt-8 justify-center gap-x-6 '>
            <button className='w-[200px] h-[50px] bg-black text-white mt-4 flex items-center justify-center'>Get Started </button>
            <button className='w-[200px] h-[50px] bg-white text-black mt-4 ml-4 flex items-center justify-center'>view pricing</button>

         </div>
        </div>
        <div className="mt-[100px]   rounded-t-[10%] flex w-full flex-col items-center bg-gradient-to-tl from-fuchsia-400 via-zinc-900 to-red-600">

        <div className="relative flex h-full justify-center">
            <Image src={HeroImage} alt='hero' className="min-h-[400px] w-full object-cover" />

            <div className="absolute bottom-5 flex w-full flex-col items-center ">
                <image src='/arrow-down.png' alt='arrow down' />
                <div className="flex w-full flex-col items-center">
                    <p className="text-white text-[16px]">trust by these companies</p>
                    <div className="grid grid-cols-3 items-center justify-center justify-items-center">
                        <Image src={tstrade} alt='logo' />
                        <Image src={tstrade} alt='logo' />
                        <Image src={tstrade} alt='logo' />
                        <Image src={tstrade} alt='logo' />
                        <Image src={tstrade} alt='logo' />

                    </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
