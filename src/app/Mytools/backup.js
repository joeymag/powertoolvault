import React from 'react'

function backup() {
  return (
    <div className="flex flex-col px-5 gap-2 ">
      <div className="border-2 border-black border-solid rounded-[20px] ">
        <div className="flex flex-row items-center">
          <Image src={dewalt} alt="Mytools" width={100} height={200} className="p-2" />

          <div className="p-4">
            <h1 className="text-[20px]">Brand: Dewalt</h1>
            <h1 className="text-[20px]">Model: DCD996</h1>
          </div>

          <div className="flex flex-row ">
            <p className="px-5 text-[20px]">...show more</p>
            {/*<Button className="bg-blue-700 text-white rounded-[10px] justify-center font-bold  " onClick={openDropdown}>Rport Stolen </Button>*/}




          </div>
        </div>
      </div>

      // This is the second card
      <div className=" bg-white  border-2 border-black border-solid rounded-[20px] px-2 flex flex-row ">
        <div className="p-4 flex flex-col">

          <Image src={dewalt} alt="Mytools" width={300} height={200} className="p-2" />
          <div className="flex flex-row gap-2">
            <Image src={dewalt} alt="Mytools" width={100} height={200} className="p-2" />
            <Image src={dewalt} alt="Mytools" width={100} height={200} className="p-2" />
            <Image src={dewalt} alt="Mytools" width={100} height={200} className="p-2" />
          </div>
        </div>
        <div className="p-4  flex flex-col  ">
          <p className="py-1 text-[20px]">Brand: Dewalt</p>
          <p className="py-1 text-[20px]">Model: DCD996</p>
          <p className="py-1 text-[20px]">Serial Number: 123456789</p>
          <p className="py-1 text-[20px]">Date Purchased: 01/01/2024</p>
          <p className="py-1 text-[20px]">Warranty: 1 year</p>
          <p className="py-1 text-[20px]">Price paid: £99.99</p>
        </div>

      </div>
    </div>

  )
}

export default backup