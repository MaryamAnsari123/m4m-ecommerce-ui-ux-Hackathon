

"use client"

import { useState } from "react"

import React from 'react'
import Image from 'next/image'

const ProductListing = () => {

  const [Count , setCount] = useState(0)

  return (
    <div className='justify-items-center mt-10 mb-20'>
        <div className='flex gap-2 flex-col lg:flex-row justify-center items-center w-[320px]
         lg:w-[1440px] h-[1055px] lg:h-[759px]'>

        <div>
        <Image 
        src="/image/chair.png"
        alt='chair'
        width={320}
        height={380}
        className='lg:w-[721px] lg:h-[759px]'/>
        </div>

        <div className='flex flex-col gap-12 justify-start items-start lg:ml-[33px]
         lg:w-[602px] h-[657px] w-[290px] mt-[51px] p-5'>

{/* 1st */}

          <div className='lg:w-[281px] lg:h-[89px] w-[188px] h-[74px] flex
           items-start justify-start flex-col gap-3 p-1'>
            <p className='lg:text-3xl text-xl font-bold'>The Dandy Chair</p>
            <p className='lg:text-xl text-lg'>£250</p>
          </div>

{/* 2nd */}

          <div className='lg:w-[532px] w-[250px] h-[193px] lg:h-[251px] flex
           items-start justify-start flex-col gap-4 p-1'>
            <p className='font-semibold'>Description</p>
            <p className='lg:text-sm text-xs'>A timeless design, with premium materials features as one of our 
            most popular and iconic pieces. The dandy chair is perfect for any stylish
             living space with beech legs and lambskin leather upholstery.
             </p>
             <ul className='text-xs list-disc list-inside'>
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
             </ul>
           </div>

{/* 3rd */}

          <div className='lg:w-[502px] lg:h-[134px] w-[250px] h-[92px] flex
           items-start justify-start flex-col gap-1'>
            <p className='font-semibold p-1'>Dimensions</p>
            <div className='p-2 flex text-center items-center gap-6'>
              
              <div>
                <p className='text-[14px] font-medium'>Height</p>
              <p className='text-[16px]'>110cm</p>
              </div>

              <div className='h-[44px] border border-gray-400'></div>

              <div >
              <p className='text-[14px] font-medium'>Width</p>
              <p className='text-[16px]'>75cm</p>
              </div>

              <div className='h-[44px] border border-gray-400'></div>

            <div>
              <p className='text-[14px] font-medium'>Depth</p>
              <p className='text-[16px]'>50cm</p>
              </div>
            </div>

           </div>

{/* 4th */}

          <div className='w-[250px] h-[80px] lg:w-[502px] lg:h-[134px] flex flex-col
           items-start lg:items-center justify-center lg:flex-row p-1 gap-1 lg:gap-4'>
            <p className="text-sm">Quantitity:</p>
<div className="bg-gray-300 flex justify-center gap-7 w-[250px] p-1 lg:w-[122px] h-[46px] items-center">
            <button onClick={() => setCount(Count - 1)}
        className="text-gray-600">-</button>
            
            <p className='text-center text-lg font-medium'>{Count}</p>

            <button onClick={() => setCount(Count + 1)}
        className="text-gray-600">+</button>

</div>
            <button className='bg-[#2A254B] lg:w-[143px] w-[250px] p-1 text-white h-[56px] lg:ml-28'>Add to Cart</button>


          </div>

         </div>


        </div>
      
    </div>
  )
}

export default ProductListing
