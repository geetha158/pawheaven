import React from 'react'
import './Bounce.css'
import bounce_img1 from '../../assests/images/bounce_img1.png'
import bounce_img2 from '../../assests/images/bounce_img2.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import review_img1 from '../../assests/images/review_img1.png'



const Bounce = () => {

  return (
    <div className='bounce'>
        <div className='bounce_container'>
            <div className='bounce_images'>
                <img className='bounce_img_1' alt='' src={bounce_img1} />
                <img className='bounce_img_2' alt='' src={bounce_img2} />
            </div>
            <div className='review_coll'>
                <div className='review_coll_star'>
                <FontAwesomeIcon className='bounce_star_icon'  icon={faStar} />  
                <p className='bounce_star_note'>5 Stars Review On Google</p>
                </div>

                <div className='review_coll_images'>

                 <img src={review_img1} alt="" />

                </div>

            </div>
        </div>
    </div>
  )
}

export default Bounce