import React from 'react'
import './Testimonials.css'
import sarah_img from '../../assests/images/sarah.png'
import emily_img from '../../assests/images/emily.png'
import testi_img from '../../assests/images/testi_img.png'

const Testimonials = () => {
    const testi_data=[
        {
            image:sarah_img,
            name:'Sarah H',
            role:'Grooming service',
            note:'I’ve never seen my dog look so good! The grooming team at PawHaven Group took such great care of Tiranoia. She came home looking and feeling amazing. I can’t recommend PawHaven enough for pet care services'
        },
        {
            image:emily_img,
            name:'Emily K',
            role: 'Overnight Care',
            note:'Leaving my cat, Luna, overnight used to make me nervous, but PawHaven changed that. They treated her like royalty! I felt completely at ease knowing she was in good hands, and she came back happy and relaxed.'
        }
    ]

    const testi_dets=[
        {   count:500,
            testi_note:'Happy Pets Cared For'
        },
        {
            count:300,
            testi_note:'Successful Sessions'
        },
        {
            count:100,
            testi_note:'Overnight Stays Completed'
        },
        {
            count:5,
            testi_note:'Years of Experience'
        }
    ]
  return (
    <div className='testimonial'>
        <div className='testimonial_container'>
            <div className='testi_top_part'>
                <div>
                    <p className='testi_note_head'>Testimonials</p>
                    <h3 className='testi_heading'>Real Stories from Happy Pet Owners</h3>
                    <p className='testi_note'>Discover what makes PawHaven the trusted choice for pet care.</p>
                </div>
            </div>

            <div className='testi_data_container'>
                <div className='test_img_container'>
                <img className='testi_img1' src={testi_img} alt="" />
                </div>
               
                {testi_data.map((data)=>{
                    return <div className='testi_box_con'>

                        <div className='testi_box'>
                             <img className='testi_img' alt='' src={data.image}></img>
                            <div>
                                <h3 className='testi_name'>{data.name}</h3>
                                <p className='testi_role'>{data.role}</p>
                             </div>
                        </div>
                        
                        
                        <p className='testi_note'>{data.note}</p>
                    </div>
                })}
            </div>

            <div className='testi_det_container'>
            <div className='testi_dets_head'>

                    {testi_dets.map((data)=>{
                             return <div className='testi_count_box'>
                                       <p className='testi_Count'> +{data.count}</p>
                                         <p>{data.testi_note}</p>
                                    </div>
                    })}

            </div>

            </div>
               
            
        </div>

    </div>
  )
}

export default Testimonials