import React from 'react'
import './Whyus.css'
const Whyus = () => {
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
                <button>
                    <p>Experienced and Caring Team</p>
                </button>
                <button>
                    Comphrensive Services
                </button>
                <button>Trusted by Pet Owners</button>
            </div>
        </div>
    </div>
  )
}

export default Whyus