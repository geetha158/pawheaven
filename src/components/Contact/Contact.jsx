import {React,useRef} from 'react'
import './Contact.css'
import contact_img from '../../assests/images/contact_img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  let full_name=useRef('');
  let email=useRef('');
  let services=useRef(null);
  let phone=useRef('');
  let messsage=useRef('');

  function submitform(e){
    e.preventDefault();
    

    if(full_name.current.value==='' || email.current.value===''  || phone.current.value==='' || messsage.current.value===''){
      alert('Please fill all the fields');

    }else{
      alert('Form submitted successfully');
      full_name.current.value='';
      email.current.value='';
      services.current.value='';
      phone.current.value='';
      messsage.current.value='';
    }

    
  }

  function serv(e){
    console.log(e);

  }
    
  return (
    <div className='contact'>
      <div className='contact_container'>
        <div className='contact_left'>
          <h2 className='contact_heading'>Contact Us</h2>
          <p className='contact_note'>For owners seeking regular, ongoing care, the Comprehensive Care Plan offers an excellent balance of essential and additional services.</p>
          <div className='contact_dets'>
            <div className='contact_det'><FontAwesomeIcon className='contact_icon' icon={faLaptop} /><p>info@pawhaven.com</p></div>
            <div className='contact_det'><FontAwesomeIcon className='contact_icon' icon={faPhoneVolume} /><p>+1 (555) 123-4567</p></div>
          </div>
          <img src={contact_img} alt="" />
        </div>
        <div className='contact_right'>
          <h2 className='contact_heading'>Lets Get In touch</h2>
          <p className='contact_note'>Fill out the form below, and we’ll call you within 24 hours.</p>
          <form action="">
            <div className='form_container'> 
            <div className='form_div'>
              <label htmlFor="">Full Name</label>
              <input type="text" name="" id="" ref={full_name} placeholder='enter your full name here' />
            </div>
            <div className='form_div'>
              <label htmlFor="">Email Address</label>
              <input ref={email} type="email" name="" id="" placeholder='enter your email id here' />
            </div>
            </div>
            <div className='form_container'>
              <div className='form_div'>
                <label htmlFor="">Services</label>
                <select name="" id="" ref={services} onChange={serv}>
                  <option value="">Choose your option</option>
                  <option value="">Grooming</option>
                  <option value="">Checkup</option>
                  <option value="">Dental Care</option>
                  <option value="">Dog Walking</option>
                  <option value="">House sitting</option>
                  <option value="">Nutrititon Advice</option>
                </select>
              </div>
              <div className='form_div'>
                <label  htmlFor="">Phone</label>
                <input ref={phone} type="tel" name="" id="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </div>
            </div>
            <div className='form_div'>
              <label htmlFor="">Message</label>
              <textarea ref={messsage} name="" id=""></textarea>
            </div>
            <button className='contact_btn' type="submit" onClick={submitform}>Submit Your Request</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact