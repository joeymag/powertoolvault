import React from 'react'

export default function UserIterms() {
  return (
    <div className='flex items-center justify-between gap-2 border rounded-[8px] p-2'>

        <div className='avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white  flex items-center justify-center'>
            <p>JW</p>
            </div>
            <div className='grow'>
                <h1 className='text-xl font-bold'>John Doe</h1>
                <p className='text-sm'>
                    Admin
                </p>
                </div>

    </div>
  )
}
