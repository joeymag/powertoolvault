import React from 'react'

export default function Topbar() {
  return (
    <div>
      <div className='flex flex-row items-center bg-black justify-center'>
        <input type="text" placeholder="Search" className="p-2 m-2 rounded-[10px]"/>
        <button className="bg-blue-700 text-white rounded-[10px] justify-center font-bold p-2">Search</button>

        
      
      <div className="flex flex-col px-5 gap-2 items-start ">
        <button className="bg-blue-700 text-white rounded-[10px] justify-center font-bold p-2">Add Tool</button>
        </div>
    </div>
    </div>
  )
}
