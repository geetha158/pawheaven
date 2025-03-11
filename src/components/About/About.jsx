import React from 'react'
import Aboutus from '../Aboutus/Aboutus'
import Testimonials from '../Testimonials/Testimonials'
import Faq from '../Faq/Faq'
import Whyus from '../Whyus/Whyus'
import Dogcare from '../Dogcare/Dogcare'
import Bounce from '../Bounce/Bounce'

const About = () => {
  return (
    <div>
        <Aboutus />
        <Testimonials />
        <Bounce />
        <Whyus />
        <Dogcare />
        <Faq />
    </div>
  )
}

export default About