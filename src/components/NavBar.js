import React from 'react'
import tstrade from '../../public/tstrade.png'
import Image from 'next/image'
import Link from 'next/link'
import { auth, UserButton } from "@clerk/nextjs"



const NavBar = async () => {
  const { userID } = await auth();
  const isauth = !!userID;

 

    return (
      <div className="flex flex-full items-center  gap-5 w-full p-5 bg-black border-red-500 border-b-2 border-solid">
        <div className='content-start  '>
          <Image
            src={tstrade}
            alt='logo'
            className='w-[100px] h-[50px]'
          />
        </div>
        <div className="flex flex-auto justify-center gap-5">
          <ul className="flex text-white flex-auto justify-center gap-5">
              <Link href='/'>
                <li>Home</li>
              </Link>
              <Link href='/profile'>
                <li>Profile</li>
              </Link>
              <Link href='/Dashbord'>
                <li>Dashbord</li>
              </Link>
              <li><UserButton afterSignOutUrl="/" /></li>
            </ul>
          </div>
         <ul className="flex flex-auto justify-end gap-5 text-white ">
              <Link href='/Dashbord'>
                <li>Dashbord</li>
              </Link>
              <li><UserButton afterSignOutUrl="/" /></li>
              <Link href='/sign-in'>
                <li>Sign In</li>  
              </Link>
              <Link href='/sign-up'>
                <li>Sign Up</li>
              </Link>
            </ul>
          </div>);
  }

  export default NavBar;
