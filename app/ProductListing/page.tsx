import React from 'react'
import ProductListing from '../Components/ProductListing'
import Card from '../Components/Card'
import Comp1 from '../Components/Comp1'
import Join from '../Components/Join'


const page = () => {
  return (
    <div className='justify-items-center'>
    <div>
      <ProductListing />
    </div>

    <div>
      <h1 className='text-lg lg:text-2xl'>You might also like</h1>
      <Card />
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
