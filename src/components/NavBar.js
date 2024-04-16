import React from 'react'
import tstrade from '../../public/tstrade.png'
import Image from 'next/image'
import Link from 'next/link'
import { auth, UserButton } from "@clerk/nextjs"



const NavBar = async() => {
  const { userID } = await auth();
  const isauth = !!userID;

  return (
    <div>
      <ul className='flex justify-between items-center m-5'>
      <div className='flex items-center  '>
        <Image
          src={tstrade}
          alt='logo'
          className='w-[100px] h-[50px]'
        />
        <div className='flex gap-10'>
          <Link href='/'>
            <li>Home</li>
          </Link>
          {isauth ? (
            <>
              <Link href='/signin'>
                <li>SignIn </li>
              </Link>
              <Link href='/signup'>
                <li>signup</li>
              </Link>
            </>
          ) : (
            <>
              <Link href='/Dashbord'>
                <li>Dashbord</li>
              </Link>
              <li><UserButton afterSignOutUrl="/" /></li>
            </>
          )}
          <Link href='/profile'>
            <li>Profile</li>
          </Link>
        </div>
      </div>
      </ul>
      </div>
     
  )
}

export default NavBar
