import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='justify-items-center'>

        <div className='relative lg:w-[1440px] p-2 lg:h-[749px] w-[290px] md:w-[390px] h-[630px]
        bg-[#F9F9F9]'>

            <div className='lg:w-[1064px] w-[250px] top-10 absolute lg:top-[64px] lg:ml-[188px]'>
            <h1 className='lg:text-4xl text-xl text-[#2A254B]'>Your shopping cart</h1>

            <div className='hidden lg:block sm:flex text-[14px] text-[#2A254B] justify-between 
            items-center lg:mt-10 mt-4'>
                <p>Product</p>
                <p className='ml-96'>Quantity</p>
                <p>Total</p>
            </div>

            <div className='hidden lg:block w-[1064px] h-0 border border-[#EBE8F4] mt-2'></div>

            <div className='flex text-[14px] lg:w-[1064px] text-[#2A254B] 
            justify-between items-center mt-10'>
                
                <div  className='w-[309px] h-[134px] flex gap-2 justify-start items-start'>
                <div>  
                <Image src="/image/vase.png"
                        alt='Pic4'
                        width={109}
                        height={134} />
                </div>

                <div className='flex flex-col gap-3 items-start justify-start'>
                    <p className='lg:text-[20px] text-sm'>Graystone vase</p>
                    <p className='lg:text-[14px] text-[9px]'>A timeless ceramic vase with <br />
                    a tri color grey glaze.</p>
                    <p className='lg:text-[16px] text-sm'>£85</p>
                </div>
                </div>

                <p className='hidden lg:block ml-40'>1</p>
                <p className='hidden lg:block'>£85</p>
            </div>

            <div className='flex text-[14px] w-[1064px] text-[#2A254B] justify-between 
            items-center mt-5'>
                
                <div  className='w-[309px] h-[134px] flex gap-2 justify-start items-start'>
                <div>  
                <Image src="/image/vase1.png"
                        alt='Pic4'
                        width={109}
                        height={134} />
                </div>

                <div className='flex flex-col gap-3 items-start justify-start'>
                    <p className='lg:text-[20px] text-sm'>Basic white vase</p>
                    <p className='lg:text-[14px] text-[9px]'>Beautiful and simple this is <br />
                    one for the classics</p>
                    <p className='lg:text-[16px] text-sm'>£125</p>
                </div>
                </div>

                <p className='hidden lg:block ml-40'>1</p>
                <p className='hidden lg:block'>£125</p>
            </div>

            <div className='lg:w-[1064px] w-[270px] h-0 border border-[#EBE8F4] mt-5'></div>

            <div className='mt-4 flex flex-col text-[#2A254B] justify-end items-end gap-3'>
                <p className='lg:text-[20px] text-sm'>Subtotal &nbsp; <span className='text-[24px]'>£210</span> </p>
                <p className='lg:text-[14px] text-[10px]'>Taxes and shipping are calculated at checkout</p>
                <button className='bg-[#2A254B] w-[230px] lg:w-[172px] h-[56px] text-white text-sm'>
                Go to checkout
                </button>

            </div>

            </div>

            

        </div>
      
    </div>
  )
}

export default page
