import React, { useState } from 'react'
import './Pricing.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCrown,faBoltLightning,faAngleRight,faPaw } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Pricing = () => {
    const plan_data_basic=['Grooming Session (1x per month)',

        'Basic Health Checkup (2x per year)',
        
        'Nail Trimming & Ear Cleaning',
        
        'Dog Walking (1x per week)',
        
        'Dental Care (1x per year)']
        const plan_data_comp=['Grooming Session (2x per month)',

            'Monthly Health Checkup ',
            
            'Nail Trimming & Ear Cleaning',
            
            'Dog Walking (3x per week)',
            
            'Dental Care (3x per year)']

        const [sbr,setsbr]=useState(true);
        const [lbr,setlbr]=useState(false);

        const [basic,setbasic]=useState(40);
        const[comp,setComp]=useState(90)

        

        function setprice(e){
            console.log(e.target.innerHTML);

            let comp_val=e.target.innerHTML;

            if(comp_val==='Small Pets'){
                setsbr(true)
                setlbr(false)
                setComp(90)
                setbasic(40)
            }
            if(comp_val==='Large Pets'){
                setsbr(false)
                setlbr(true)
                setbasic(80)
                setComp(120)
            }
            
        }
  return (
    <div className='pricing'>
        <div className='pricing_container'>
            <div className='pricing_con'>
                <div className='pricing_main_head'>
                    <p className='pricing_main_note_head'>Pricing</p>
                    <h2 className='pricing_main_heading'>Affordable Care for Your Beloved Pets</h2>
                    <p className='pricing_main_note'>Our affordable pricing ensures your furry friends receive the love, attention, and professional care they deserve—without breaking the bank.</p>
                    <div className='pricing_main_btn'>
                        <button onClick={setprice} className={sbr?'bradd':'nobr'}>Small Pets</button>
                        <button onClick={setprice} className={lbr?'bradd':'nobr'}>Large Pets</button>
                    </div>
                </div>
                <div className='pricing_plan'>
                    <div className='pricing_plan_theme'>
                        <FontAwesomeIcon className='pricing_icon' icon={faCrown} />
                        <h2 className='pricing_plan_heading'>Basic Care Plan</h2>
                        <p className='pricing_plan_note'>Perfect for routine services, the Basic Care Plan covers essential pet care needs to keep your pet looking and feeling great.</p>
                        <p className='pricing_price'><span>${basic}</span>/per Month</p>
                        <button className='btn_pricing'><FontAwesomeIcon className='plan_icon' icon={faClipboard} /><p>Get Started</p></button>
                        <div className='plan_dets_box'>
                            {plan_data_basic.map((data)=>{
                                return <div className='plan_dets'><FontAwesomeIcon className='angle_icon' icon={faAngleRight} />
                                    <p>{data}</p></div>
                            })}
                        </div>
                    </div>
                    <div className='pricing_plan_theme'>
                        <FontAwesomeIcon className='pricing_icon' icon={faBoltLightning} />
                        <h2 className='pricing_plan_heading'>Comprehensive Care Plan</h2>
                        <p className='pricing_plan_note'>For owners seeking regular, ongoing care, the Comprehensive Care Plan offers an excellent balance of essential and additional services.</p>
                        <p className='pricing_price'><span>${comp}</span>/per month</p>
                        <button className='btn_pricing'><FontAwesomeIcon className='plan_icon' icon={faClipboard} /><p>Get Started</p></button>
                        <div className='plan_dets_box'>
                        {plan_data_comp.map((data)=>{
                                return <div className='plan_dets'><FontAwesomeIcon className='angle_icon' icon={faAngleRight} />
                                    <p>{data}</p>
                                    </div>
                            })}
                        </div>
                    </div>
                    <div className='pricing_sides'>
                        <div className='pricing_side'><p className='pricing_side_note'>We understand that every pet has different needs. That’s why we provide flexible pricing plans to suit pets of all ages, sizes, and temperaments.</p></div>
                        <div className='pricing_side'>
                            <FontAwesomeIcon className='pricing_paw_icon' icon={faPaw} />
                            <h2 className='pricing_plan_heading'>Custom Plan</h2>
                            <p className='pricing_side_note'>At PawHaven , we understand that every pet is unique, and so are their needs. With our Custom Plan, you can tailor a package that fits your pet’s specific requirements. From grooming to specialized health services, you choose what works best for your furry friend.</p>
                            <button className='btn_pricing'><FontAwesomeIcon className='plan_icon' icon={faClipboard} /><Link to='/contact'>
                            Get Started</Link><p></p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing