import { LayoutDashboard, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { sidebarLink } from '../../Utils/links'

function Sidebar() {
  return (
    <div className='bg-slate-800 text-white w-48'>
        {/* Profile */}
        <div className='flex flex-col items-center my-12 gap-2'>
            <User size={48} />
            <p> Profile </p>
        </div>
        {/* /profile */}

        {/* Navlink */}
        {
            sidebarLink.map( (item) => {
                return(
            <div key={item.label}>
            <Link to={item.link}
                className='flex py-2 px-4 gap-2 hover:bg-amber-400 hover:duration-700'>
                {item.icon}
                <p> {item.label} </p>
            </Link>
            </div>
            )})
        }
        
    
    </div>
  )
}

export default Sidebar