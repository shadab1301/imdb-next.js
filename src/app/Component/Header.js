import React from 'react'
import NavLink from './NavLink'
import { MdHome } from "react-icons/md";
import { ImNotification } from "react-icons/im";
import Link from 'next/link';



const Header = () => {
  return (
      <div className='flex gap-3 justify-between max-w-5xl p-4 mx-auto ' >
        <div className='flex gap-3'>
              <NavLink path="/" Icon={MdHome} title="home"/>
              <NavLink path="/about" Icon={ImNotification} title="about"/>
        </div>
        <div>
            <Link href={"/"} className='flex gap-1 text-2xl items-center'>
            <span className='text-2xl bg-amber-500 rounded-lg py-1 px-3'>IMDb</span>
            <span>Clone</span>
            </Link>
        </div>
    </div>
  )
}

export default Header