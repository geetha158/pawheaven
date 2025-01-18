import React from 'react'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw'
import { faHouse,faUser,faClipboardList,faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar_container'>
            <div className='nav_logoside'>
            <FontAwesomeIcon className='navbar_paw_icon' icon={faPaw} />
            <h3>PawHeaven</h3>
            </div>
            <div className='navbar_navlinks'>
                <div className='navbar_navlink'>
                <FontAwesomeIcon className='nav_link_icon' icon={faHouse} />
                <h4>Home</h4>
                </div>
                <div className='navbar_navlink'>
                <FontAwesomeIcon className='nav_link_icon' icon={faUser} />
                <h4>About Us</h4>
                </div>
                <div className='navbar_navlink'>
                <FontAwesomeIcon className='nav_link_icon' icon={faClipboardList} />
                <h4>Our Pricing</h4>
                </div>
                <div className='navbar_navlink'> <h4>More</h4>
                <FontAwesomeIcon className='nav_link_icon' icon={faAngleDown} />
                </div>
            </div>
            <div className='navbar_booking_side'>
            <FontAwesomeIcon className='navbar_paw_icon' icon={faPaw} />
            <button>Book Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar