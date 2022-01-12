import React from 'react'
import { NavLink } from 'react-router-dom' 

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar_2'>
                <NavLink exact to='/'> Product </NavLink> 
                <NavLink to='/download'> Download </NavLink> 
                <NavLink to='/pricing'> Pricing </NavLink>
            </div>
        </div>
    )
}

export default Navbar
