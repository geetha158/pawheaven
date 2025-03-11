import React from 'react'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw'
import { faHouse,faUser,faClipboardList,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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
                <Link to='/'><h4>Home</h4></Link>
                </div>
                <div className='navbar_navlink'>
                <FontAwesomeIcon className='nav_link_icon' icon={faUser} />
                <Link to='/about'><h4>About Us</h4></Link>
                </div>
                <div className='navbar_navlink'>
                <FontAwesomeIcon className='nav_link_icon' icon={faClipboardList} />
                <Link to='/pricing'><h4>Our Pricing</h4></Link>
                </div>
                <div className='navbar_navlink'>
                <FontAwesomeIcon className='nav_link_icon' icon={faClipboardList} />
                <Link to='/services'><h4>Servo Blog</h4></Link>
                </div>
            </div>
            <div className='navbar_booking_side'>
              
            <FontAwesomeIcon className='navbar_paw_icon' icon={faPaw} />
            <button className='book_btn'><Link to='/contact'><p className='book'>Book Appointment</p></Link></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar