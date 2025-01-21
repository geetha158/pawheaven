import React from 'react'
import './Dogcare.css'
import dogcare_img from '../../assests/images/dogcare_img.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw'

const Dogcare = () => {
  return (
    <div className='dogcare'>
        <div className='dog_Care_con'>
        <div className='dogcare_Container'>
            <img className='dog_img' src={dogcare_img} alt="" />
        </div>
        <div className='dog_box'>
            <p className='dog_box_note_head'>Care for Dogs</p>
            <h2 className='dog_box_heading'>Dogs Need Love Too!</h2>
            <p className='dog_box_note'>While our Doberman might steal the spotlight, our love and care extend to all pets, including your feline friends. From grooming to specialized health care, we provide everything your dog needs to thrive. Book a service today and pamper your dog with the attention they deserve!</p>
            <button className='dog_btn'><FontAwesomeIcon className='dog_btn_icon' icon={faPaw} /><p className='btn_note'>Book Dog Care Now</p></button>
        </div>
        </div>
        
    </div>
  )
}

export default Dogcare