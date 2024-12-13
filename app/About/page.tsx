import React from 'react'
import Card1 from '../Components/Card1'
import Image from 'next/image'
import Comp1 from '../Components/Comp1'
import Join from '../Components/Join'
import About from '../Components/About'


const page = () => {
  return (
    <div className='justify-items-center'>

            <div className='lg:w-[1440px] p-2 w-[270px] h-[277px] flex flex-col lg:flex-row 
      lg:gap-48 gap-4 justify-center items-center'>

        <p className='lg:text-2xl text-lg'>
        A brand built on the love of craftmanship, <br />
        quality and outstanding customer service
        </p>

        <button className='bg-gray-400 hover:bg-blue-300 hover:shadow-lg 
            py-2 px-2 font-medium text-base lg:w-[192px] w-[250px] h-[56px]'>
                View Collection
            </button>

      </div >
      
        <div>
      <Card1 />
      </div>

      <div>
      <About />
      </div>    

<div>
  <Comp1 />
</div>

<div>
  <Join />
</div>

    </div>
  )
}

export default page
