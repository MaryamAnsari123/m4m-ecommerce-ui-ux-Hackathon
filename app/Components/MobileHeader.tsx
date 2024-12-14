import { MenuIcon, Search, ShoppingCart } from "lucide-react"
import Dropdown from "./DropDown"
import Link from "next/link"

const MobileHeader = () => {
    return (
        <div className="justify-items-center">
      <div className="flex justify-center gap-36 md:gap-80 items-center w-[390px] h-[69px]">

            <div>
            <h1 className='text-lg font-semibold'>
            Avion
            </h1>
            </div>

            <div className='flex justify-center items-center gap-2'>
           
              <Link href="/ShoppingBasket">
              <ShoppingCart className='w-[16px] h-[16px]' />
              </Link>
              
              <Search className='w-[16px] h-[16px]' />
           
              <Dropdown />
            </div>

      </div>
      </div>
    )
  }
  
  export default MobileHeader
