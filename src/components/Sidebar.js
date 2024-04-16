'use client';

import UserIterms from './UserIterms'


export default function Sidebar() {
  const menuList = [
    {name : 'My Tools', href: '/Mytools' },
    {name : 'check a tool', href: '/checktool' },
    {name : 'setting', href: '/settings' },
  ]
   



  return (
    <div className='flex flex-col gap-2 w-[300px] min-w-[300px] border-black min-h-screen bg-slate-600 p-4'>
      <div>
        <UserIterms />
      </div>
      <div className='flex flex-col gap-2 px-1'>
        {menuList.map((menu, index) => (
          <a
            key={index}
            href={menu.href}
            className='text-black hover:text-cyan-600 bg-white rounded-md border-2 border-solid border-inherit p-2 text-center'
          >
            {menu.name}
          </a>
        ))}
      </div>
    </div>
  );
}
