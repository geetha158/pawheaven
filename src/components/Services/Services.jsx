import React from 'react'
import './Services.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBath,faHospital,faTooth,faDog } from '@fortawesome/free-solid-svg-icons'

import serv_img1 from '../../assests/images/serv_img1.png'
import serv_img2 from '../../assests/images/serv_img2.png'
import serv_img3 from '../../assests/images/serv_img3.png'
import serv_img4 from '../../assests/images/serv_img4.png'



const Services = () => {

    const serv_data=[
        {
            icon: faBath,
            heading:'Grooming',
            note:'We Keep your pets looking great with baths, haircuts, and nail trims, all done with gentle care and high-quality products.',
            image:serv_img1
        },
        {
            icon: faHospital,
            heading:'Checkup',
            note:'Our regular checkups ensure your pet’s health is on track, with vaccinations, and personalized advice.',
            image:serv_img2
        },
        {
            icon: faTooth,
            heading:'Dental Care',
            note:'Maintain your pet’s oral health with professional teeth cleaning and tartar removal.',
            image:serv_img3
        },
        {
            icon: faDog,
            heading:'Dog Walking',
            note:'Give your dog the exercise they need with our personalized walking services, providing physical activity and mental stimulation.',
            image:serv_img4
        }
    ]

  return (
    <div className='services'>
        <div className='services_container'>

            <p className='serv_note'>Our Services</p>
            <h3 className='serv_heading'>Our Range of Services: Caring for Pets, One Paw at a Time</h3>
            <div className='serv_side'>
                <p className='serv_side_note'>At PawHaven, we offer a diverse range of services designed to meet every need of your beloved pets.</p>
                {/* <div className='serv_more'>
                    <FontAwesomeIcon className='serv_plus_icon' icon={faPlus} />
                    <button>More Services</button>
                </div> */}
            </div>

            <div className='serv_data_container'>
                {serv_data.map((data)=>{
                    return <div className='serv_data_grid'>
                        <FontAwesomeIcon className='serv_data_icon'  icon={data.icon} />
                        <h3 className='serv_data_heading'>{data.heading}</h3>
                        <p className='serv_data_note'>{data.note}</p>
                        <div className='img_con'>
                        <img className='serv_data_img' src={data.image} alt="" />
                        </div>
                        
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Services