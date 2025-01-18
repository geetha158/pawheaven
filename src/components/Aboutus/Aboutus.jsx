import React from 'react'
import './Aboutus.css'
import about_img from '../../assests/images/about_img.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const Aboutus = () => {
  return (
    <div className='aboutus'>
        <div className='aboutus_container'>
            <div className='abt_left'>
                <p className='abt_note_head'>About Us</p>
                <h2 className='abt_heading'>Our Passion is Caring for Your Pets Like Family</h2>
                <p className='abt_note'>At PawHaven, we believe every pet deserves love, care, and attention. Our dedicated team is passionate about providing personalized care that makes your furry friends feel right at home. From grooming and health checkups to specialized services, we treat every pet as if they were our own, ensuring they are happy, healthy, and well cared for.</p>
                <div className='abt_box'>
                    <div className='abt_data'>

                    <FontAwesomeIcon className='abt_icon' icon={faUser} />
                    <div>
                        <h2 className='abt_box_head'>Personalized Care</h2>
                        <p className='abt_box_note'>We tailor our services to meet the unique needs of every pet, ensuring they receive the best care possible.</p>
                    </div>

                    </div>
                    <div className='abt_data'>

                    <FontAwesomeIcon className='abt_icon' icon={faPeopleGroup} />
                    <div>
                        <h2 className='abt_box_head'>Experienced Team</h2>
                        <p className='abt_box_note'>Our team of skilled professionals is passionate about pets, providing expert care and attention to keep them healthy and happy.</p>
                    </div>

                    </div>
                    
                </div>
            </div>
            <div className='about_img'>
                <img src={about_img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Aboutus