import React from 'react'
import './Testimonials.css';
import AVTR1 from "../../../assets/avatar1.jpg";
import AVTR2 from "../../../assets/avatar2.jpg";
import AVTR3 from "../../../assets/avatar3.jpg";
import AVTR4 from "../../../assets/avatar4.jpg";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from 'swiper'



const data = [
  {
    avatar: AVTR1,
    tname: 'jacob fils de pute nique son dieu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea nesciunt veniam provident ut consequuntur vero praesentium ipsam temporibus incidunt nihil optio ratione ducimus, voluptatem reiciendis aut, maiores accusantium voluptate!'
  },
  {
    avatar: AVTR1,
    tname: 'jacob fils de pute nique son dieu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea nesciunt veniam provident ut consequuntur vero praesentium ipsam temporibus incidunt nihil optio ratione ducimus, voluptatem reiciendis aut, maiores accusantium voluptate!'
  },
  {
    avatar: AVTR1,
    tname: 'jacob fils de pute nique son dieu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea nesciunt veniam provident ut consequuntur vero praesentium ipsam temporibus incidunt nihil optio ratione ducimus, voluptatem reiciendis aut, maiores accusantium voluptate!'
  },
  {
    avatar: AVTR1,
    tname: 'jacob fils de pute nique son dieu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea nesciunt veniam provident ut consequuntur vero praesentium ipsam temporibus incidunt nihil optio ratione ducimus, voluptatem reiciendis aut, maiores accusantium voluptate!'
  },
  {
    avatar: AVTR1,
    tname: 'jacob fils de pute nique son dieu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea nesciunt veniam provident ut consequuntur vero praesentium ipsam temporibus incidunt nihil optio ratione ducimus, voluptatem reiciendis aut, maiores accusantium voluptate!'
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container">
        {
          data.map(({avatar, tname, review}, index) => {
            
        return (<SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} alt="" />
            </div>
            <h5 className=''>{tname}</h5>
            <small className='client_review'>
              {review}
            </small>
        </SwiperSlide>
        )
        })}
        </Swiper>
    </section>
  )
}

export default Testimonials