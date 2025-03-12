import React from 'react'
import './Blog.css'
import img1 from '../../assests/images/blog_1_img.png'
import img2 from '../../assests/images/blog_2_img.png'
import img3 from '../../assests/images/blog_3_img.png'
const Blog = () => {

    const blog_data=[
        {id:0,
        img:img1,
        head:'Pet Nutrition',
        date:'December 4, 2024'
        },
        {id:1,
        img:img2,
        head:'Pet Care',
        date:'January 4, 2025'
        },
        {id:2,
        img:img3,   
        head:'Dog Training',
        date:'February 4, 2023'
        }
    ]
    function onpathpage(e){
        let namepge=e.target.innerText
        window.location.href =`/services/${namepge}`
    }
  return (
    <div>
        <div className='blog_continer'>
            <div className='Blog_box'>
                <p className='blog_head'>Our Blog</p>
            </div> 
            <div className='blog_img'>

                {blog_data.map((data)=>{
                    return <div className='blog_item'>
                    <img className='blog_img_tag' src={data.img} alt="" />
                <p className='blog_head_note' onClick={onpathpage}>{data.head}</p>
                <p className='blog_date_note'>{data.date}</p>

                </div>
            
                })}
                
            </div>   

                 
        </div>
    </div>
  )
}

export default Blog