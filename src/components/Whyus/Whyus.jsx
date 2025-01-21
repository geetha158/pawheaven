import React, { useState } from 'react'
import './Whyus.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const Whyus = () => {

    const [id,setId]=useState(0)
    const [clr1,setclr1]=useState(true);
    const [clr2,setclr2]=useState(false);
    const [clr3,setclr3]=useState(false);
     function  btnslide(e){

        console.log(e.target)
        let btnval=e.target.innerHTML



        if(btnval=='Experienced and Caring Team'){
            setclr2(false)
            setclr3(false)
            setclr1(true)
            setId(0)
        } 


        if(btnval=='Comphrensive Services'){
            setclr2(true)
            setclr3(false)
            setclr1(false)
            setId(1)
        } 
        
        if(btnval=='Trusted by Pet Owner'){
            setclr2(false)
            setclr3(true)
            setclr1(false)
            setId(2)
        } 

            console.log(id);
     } 

     console.log(id);

     let slide_data=[
        {
            name1:'All-in-One Pet Care Solutions',
            name2:'Tailored Services for Every Pet',
            name3:'Flexible Service Plans to Suit You'
        },
        {
            name1:'Certified Professionals with Years of Experience',
            name2:'Loving Care for Every Pet',
            name3:'Passionate Pet Lovers Who Go the Extra Mile'
        },
        {
            name1:'Countless Happy Clients Who Trust Us',
            name2:'Highly Rated for Reliable, Caring Service',
            name3:'Endorsed by Vets and Pet Professionals'
        }
     
     ]

  return (
    <div className='whyus'>
        <div className='whyus_container'>
            <div className='whyus_con'>
                <p className='whyus_head_note'>Why Us</p>
                <h2 className='whyus_heading'>What makes Us Different</h2>
                <p className='whyus_note'>With a dedicated team of experienced professionals, personalized attention, and a genuine love for animals, we’re committed to keeping your pets happy, healthy, and safe</p>
            </div>
        </div>
        <div className='why_bottom_con'>
            <div className='why_buttons'>
                <button onClick={btnslide} className={clr1?'addbdrclr':'nobdr'} >Experienced and Caring Team</button>
                <button onClick={btnslide} className={clr2?'addbdrclr':'nobdr'}>Comphrensive Services</button>
                <button onClick={btnslide} className={clr3?'addbdrclr':'nobdr'}>Trusted by Pet Owner</button>
            </div>
            
        </div>
        <div className='btn_slide'>
            <div className='felx_head_btn'>
                <div className='flex_btn'><FontAwesomeIcon className='flex_btn_icon' icon={faAngleRight} /><p>{slide_data[id].name1}</p></div>
                <div className='flex_btn'><FontAwesomeIcon className='flex_btn_icon' icon={faAngleRight} /><p>{slide_data[id].name2}</p></div>
                <div className='flex_btn'><FontAwesomeIcon className='flex_btn_icon' icon={faAngleRight} /><p>{slide_data[id].name3}</p></div>
            </div>
            
        </div>
    </div>
  )
}

export default Whyus