import Link from 'next/link'
import React from 'react'

const NavLink = ({title,Icon,path}) => {
  return (
    <Link href={path} className="flex gap-3 align-middle hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase text-2xl hidden sm:inline">{title}</p>
    </Link>
  );
}

export default NavLink