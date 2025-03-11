import React from 'react'
import {  useParams } from 'react-router'
import { Link } from 'react-router-dom'
import './Blogpage.css'


const Blogpage = () => {

    

    const param=useParams();

    const path=param.name

    console.log(path)
    const blog_data=[
        {
            
            name:'Pet Nutrition',
            head1:'Discover the best nutritional practices for your pets. This category covers dietary needs for various types of pets, including dogs, cats, and small animals, ensuring they receive balanced meals.',
            note1:'Caring for your pet’s health is an essential part of being a responsible owner. Pets, like humans, require regular checkups, a balanced diet, exercise, and preventive care to live happy and healthy lives. A proper healthcare routine not only enhances their well-being but also strengthens the bond you share with them.',
            head2:'Why Nutrition Matters',
            note2:'Proper nutrition is essential for your pet’s overall health and well-being. A balanced diet provides the necessary nutrients to maintain healthy organs, bones, and muscles, while also supporting their immune system and energy levels.',
            head3:'Benefits of a Balanced Diet',
            note3:'A balanced diet helps prevent obesity, diabetes, and other health issues. It also supports healthy digestion, skin, and coat, and helps maintain a healthy weight. Proper nutrition is especially important for young, growing pets and senior pets with specific dietary needs.',
            last:'Final Thoughts',
            last_note:'Providing your pet with a balanced diet is one of the most important ways to show your love and care. By understanding their nutritional needs and feeding them high-quality food, you’ll help ensure they live a long, healthy, and happy life.'
        },
        {
           
            name:'Pet Care',
            head1:'This category provides essential tips and advice for pet owners to ensure their furry friends are healthy and happy. From nutrition to grooming, we cover all aspects of pet care',
            note1:'Caring for your pet’s health is an essential part of being a responsible owner. Pets, like humans, require regular checkups, a balanced diet, exercise, and preventive care to live happy and healthy lives. A proper healthcare routine not only enhances their well-being but also strengthens the bond you share with them.',
            head2:'Why Pet Care Matters',
            note2:'Regular checkups and preventive care help identify health issues early and ensure your pet receives timely',
            head3:'Benefits of Regular Checkups',
            note3:'Regular checkups help prevent health issues and catch potential problems early. They also provide an opportunity to discuss your pet’s diet, behavior, and overall well-being with your veterinarian.',
            last:'Final Thoughts',
            last_note:'Caring for your pet’s health is an essential part of being a responsible owner. By providing regular checkups, a balanced diet, exercise, and preventive care, you’ll help ensure your pet lives a long, healthy, and happy life.'
        },
        {
            
            name:'Dog Training',
            head1:'Explore effective dog training techniques and methods to help you teach your dog good behavior. This category includes tips on obedience training, socialization, and problem-solving.',
            note1:'Proper grooming is essential for keeping your pet healthy, comfortable, and looking their best. Regular grooming doesn’t just maintain your pet’s appearance—it also helps identify potential health issues early and strengthens the bond between you and your furry friend.',
            head2:'Why Grooming Matters',
            note2:'Grooming is about more than just keeping your pet looking good. It’s also an essential part of their overall health and well-being',
            head3:'Benefits of Regular Grooming',
            note3:'Regular brushing removes loose fur and prevents mats, especially for long-haired breeds. It also distributes natural oils, keeping their coat shiny and healthy.Bathing your pet every 4–6 weeks (depending on their breed and activity level) helps maintain a clean coat. Use pet-specific shampoos to avoid skin irritation.',

            last:'Final Thoughts',
            last_note:"Grooming your pet is more than a chore—it’s an opportunity to ensure their health, happiness, and comfort. With the right tools, techniques, and regular attention, you’ll keep your pet looking and feeling their best while strengthening your connection."
        }
    ]
  return (
    <div><div>

        {blog_data.filter((data)=>data.name===path).map((data)=>{
            return <div className='blog_page_con'>
                <div className='blog_page_container1'>
                <h1 className='main_heading'>{data.name}</h1>

                <p className='head1'>{data.head1}</p>

                <div className='notes_inside'>
                    <p className='note1'>{data.note1}</p>
                    <h2 className='head2'>{data.head2}</h2>
                    <p className='note1'>{data.note2}</p>
                    <h2 className='head2'>{data.head3}</h2>
                    <p className='note1'>{data.note3}</p>
                    <h2 className='head2'>{data.last}</h2>
                    <p className='note1'>{data.last_note}</p>
                </div>

                <button className='btn_chk_more'><Link to='/services'>CHECK MORE</Link></button>

                </div>

                
                
            </div>
        })}
        
        </div></div>
  )
}

export default Blogpage