import React, { useState } from 'react'
import './Faq.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard,faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Faq = () => {

    const [ss1,setss1]=useState(false)
    const [ss2,setss2]=useState(false)
    const [ss3,setss3]=useState(false)
    const [ss4,setss4]=useState(false)
    const [ss5,setss5]=useState(false)

    const faq_data=[
        { question:'What types of pets do you provide services for?',
            answer:'We offer services for dogs, cats, and small pets like rabbits and guinea pigs. If you have a different pet, feel free to reach out to check availability.', 
            state1:ss1
        },
        { question:'How do I book a service?',
            answer:'Booking is simple! Visit our website’s booking page, select the service you need, and pick a time that works best for you.',
            state1:ss2
        },
        { question:'Are your grooming products safe for pets?',
            answer:'Yes, all our grooming products are pet-safe, hypoallergenic, and tailored to suit various breeds and coat types.',
            state1:ss3
        },
        { question:'Do you offer emergency services?',
            answer:'While we don’t provide emergency veterinary care, we can recommend trusted local vets who are available 24/7.',
            state1:ss4
        },
        { question:'Can I customize a service package?',
            answer:'Absolutely! We offer customizable plans to fit your specific needs and your pet’s requirements. Contact us to create a tailored package.',
            state1:ss5
        },
    ]

    let questions=['What types of pets do you provide services for?','How do I book a service?','Are your grooming products safe for pets?','Do you offer emergency services?','Can I customize a service package?']

    let answers=['We offer services for dogs, cats, and small pets like rabbits and guinea pigs. If you have a different pet, feel free to reach out to check availability.','Booking is simple! Visit our website’s booking page, select the service you need, and pick a time that works best for you.','Yes, all our grooming products are pet-safe, hypoallergenic, and tailored to suit various breeds and coat types.','While we don’t provide emergency veterinary care, we can recommend trusted local vets who are available 24/7.','Absolutely! We offer customizable plans to fit your specific needs and your pet’s requirements. Contact us to create a tailored package.']

    function sethide(e){
       let val1=e.target.innerHTML

       let idx=questions.indexOf(val1)

       if(idx===0){
        setss1(!ss1)
       }
       if(idx===1){
        setss2(!ss2)
       }
       if(idx===2){
        setss3(!ss3)
       }
       if(idx===3){
        setss4(!ss4)
       }
       if(idx===4){
        setss5(!ss5)
       }



    }

    function sethide2(e){
        let val1=e.target.innerHTML

        let idx=answers.indexOf(val1)
 
        if(idx===0){
         setss1(!ss1)
        }
        if(idx===1){
         setss2(!ss2)
        }
        if(idx===2){
         setss3(!ss3)
        }
        if(idx===3){
         setss4(!ss4)
        }
        if(idx===4){
         setss5(!ss5)
        }
 

    }

  return (
    <div className='faq'>
        <div className='faq_container'>
            <div className='faq_left'>
                <p className='faq_left_head_note'>FAQ’s</p>
                <h2 className='faq_left_heading'>Got Questions? We’ve Got Answers!</h2>
                <p className='faq_left_note'>We’re here to make pet care easy and stress-free. Explore our FAQs for quick answers to common questions about our services, pricing, and more.</p>
                <button className='btn_faq'><FontAwesomeIcon className='faq_clip' icon={faClipboard} /><p><Link to='/contact'>Get Started</Link></p></button>
            </div>
            <div className='faq_right'>
                <div>
                    {faq_data.map((data)=>{

                        console.log(data.state1)

                        return <div  className='question_container'>
                            <div className='question' onClick={sethide2} ><p className='faq_right_heading' onClick={sethide}>{data.question}</p><FontAwesomeIcon icon={data.state1?faMinus:faPlus} /></div>
                            <p className={data.state1?'show':'hidden'} onClick={sethide2}>{data.answer}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq