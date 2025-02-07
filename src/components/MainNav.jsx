import React from 'react'
import { Link } from "react-router"

function MainNav() {
  return (
    <nav className='bg-blue-400 text-xl text-white px-10 py-2 flex justify-between rounded-3xl shadow m-5'>
        <div className='flex gap-15'>
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        </div>
        <div className='flex gap-15'>
        <Link to='/register'> Register </Link>    
        <Link to='login'> Log in</Link>
        </div>
    </nav>
  )
}

export default MainNav