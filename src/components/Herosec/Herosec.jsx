import React from 'react'
import './Herosec.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw'

import hero_img from '../../assests/images/hero_img.png'

const Herosec = () => {
  return (

    <div className='hero_con'>

    <div className='herosec'>
        <div className='herosec_container'>
            <div className='herosec_dets'>

            <h1 className='hero_heading'>Love, Care, and Everything Pets Need</h1>
            <p className='hero_note'>At PawHaven, we believe pets deserve nothing but the best. From grooming and boarding to health checkups and training, our dedicated team provides comprehensive care with a personal touch.</p>
            <p className='hero_start_button'>
                <FontAwesomeIcon className='hero_paw_icon' icon={faPaw} />
                <button>Get started</button>
            </p>

            </div>

            


            <div>
            
            </div>
            
            
        </div>
    </div>

    <img src={hero_img} className='herosec_image' alt="" />

    </div>
  )
}

export default Herosec