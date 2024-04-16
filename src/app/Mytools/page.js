"use client";

import Image from 'next/image'
import dewalt from '../../../public/dewalt.jpg'
import React, { useState } from 'react';
import Topbar from './Topbar';
import { Button } from '@nextui-org/react';

export default function Mytools() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);




  const tools = [
    {
      id: 1,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£29.99"
    },
    {
      id: 2,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£89.99"
    },
    {
      id: 3,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£69.99"
    },
    {
      id: 4,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£49.99"
    },
    {
      id: 5,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£19.99"
    },
    {
      id: 6,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£69.99"
    },
    {
      id: 7,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£59.99"
    },
    {
      id: 8,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£29.99"
    },
    {
      id: 9,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£79.99"
    },
    {
      id: 10,
      brand: "Dewalts",
      model: "DCD996",
      serialNumber: "123456789",
      datePurchased: "01/01/2024",
      warranty: "1 year",
      pricePaid: "£89.99"
    },
    
  ]

  




  return (

    <><Topbar />
    <div className="flex flex-row ">
    <div className="flex flex-row flex-1 py-4 gap-4 p-8">
        <div className="flex flex-col flex-auto ">
          {tools.map((tools) => (
            <div className="py-2" key={tools.id}>
              <div className="gap-4 border-2 border-black border-solid rounded-[20px]  p-4 ">
                <div className="flex flex-row items-center">
                  <Image src={dewalt} alt="Mytools" width={100} height={200} className="p-2" />
                  <div className="p-4 ">
                    <h1 className="text-[20px]">Brand: {tools.brand}</h1>
                    <h1 className="text-[20px]">Model: {tools.model}</h1>
                  </div>
                  <div className="p-0 ">
                    <Button className="bg-blue-700 text-white rounded-[10px] justify-center font-bold" onClick={()=>moreinfo(tools, tools.id)}>more info</Button>
                  {/*when clicked on more info, it will display the rest of the information on main card*/}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        
    
      
           {/* main card will need to be sticky so stay in user viwe as they scroll down  */}
        <div className=" flex flec-row border-solid rounded-[20px] border-black border-2 flex-auto max-h-[600px] my-5  ">
          <div className="flex flex-col">
            <div className="flex flex-row ">
              <Image src={dewalt} alt="Mytools" width={400} height={200} className="p-2" />
              <div className="flex flex-col p-4">
                <p className="text-[20px]">Brand: Dewalt</p>
                <p className="text-[20px]">Model: DCD996</p>
                <p className="text-[20px]">Serial Number: 123456789</p>
                <p className="text-[20px]">Date Purchased: 01/01/2024</p>
                <p className="text-[20px]">Warranty: 1 year</p>
                <p className="text-[20px]">Price Paid: £99.99</p>
                <div className="p-2">
                  {/* need to add a map here that 400 x 400 show geo of wher tool was stolon from  */}
                  
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <Image src={dewalt} alt="Mytools" width={100} height={200} className="p-2" />
              <Image src={dewalt} alt="Mytools" width={100} height={200} className="p-2" />
              <Image src={dewalt} alt="Mytools" width={100} height={200} className="p-2" />
            </div>
          </div>
        </div>
      </div>


    </>


  );
}
