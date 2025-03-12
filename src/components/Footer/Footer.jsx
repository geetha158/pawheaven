import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw,faBone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <div className='footer_con'>
          <div className='footer_head'>
            <div className='icon_flx'><FontAwesomeIcon className='foot_paw_icon' icon={faPaw} /><h2 className='heading_foot'>PawHeaven</h2>
            </div>
            <p className='footer_note'>At PawHaven, we provide expert, compassionate care to ensure your pets are happy, healthy, and loved.</p>
            <button className='ftr_btn'><FontAwesomeIcon className='foot_bone_icon' icon={faBone} /><p>
              <Link to='/contact'>Get an Appointment</Link></p></button>
          </div>

          <div className='footer_down'>
            <div><h3 className='list_heading'>Company</h3>
            <div className='flex_col'>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/services">Services</Link></div>
            </div>
            <div>
              <h3 className='list_heading'>Follow Us</h3>

              <div className='flex_col'>
                <a href="https://www.instagram.com/itsgeetha_15/?next=%2F" target='_blank' rel="noreferrer">Instagram</a>
                <a href="https://github.com/geetha158" target='_blank' rel="noreferrer">GitHub</a>
                <a href="https://www.facebook.com/geethasree.geethu.15/" target='_blank' rel="noreferrer">Facebook</a>
                <a href="https://www.linkedin.com/in/geethasree/" target='_blank' rel="noreferrer">LinkedIn</a>
              </div>

            </div>
            <div>
              <h1 className='list_heading'>Company</h1>
              <div className='flex_col'>
              <p>info@pawhaven.com</p>
              <p>+1 (555) 123-4567</p>
              <p>1234 Furry Friends Avenue, Petville, PA 19000</p>
              </div>
             
            </div>
          </div>
          <div className='copyright'>Created By Geethasree 😊</div>
        </div>
      </div>
    </div>
  )
}

export default Footer