import React from 'react';
import Styles from '../../style/Homepage.module.css';
import { Navigation, Pagination, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Fade} from "react-awesome-reveal";
import Link from 'next/link';
import { FaLongArrowAltRight,FaNotesMedical } from "react-icons/fa";
import { TbClockHour10 } from "react-icons/tb";
import { CiMedicalCross } from "react-icons/ci";


export default function Homepage() {

  return (
    <div className={Styles.homepage}>
             <Swiper
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }} 
      rewind={false}
    >
      <SwiperSlide className={Styles.slide1} >
        <div className='container ' >
          <Fade  direction="up" duration={500} triggerOnce={true}>
          <div className= {Styles.inner}>
      <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
        <div className={Styles.btns}>
            <button>Get Appointment</button>
            <button>Contact Now</button>
            </div>
        </div>
        </Fade>
        </div>
      </SwiperSlide>
      <SwiperSlide className={Styles.slide2}>
      <div className='container'>
      <Fade  direction="up" duration={500} triggerOnce={true}>
      <div className= {Styles.inner}>
      <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
        <div className={Styles.btns}>
            <button>Get Appointment</button>
            <button>Contact Now</button>
        </div>
        </div></Fade>
        </div>
      </SwiperSlide>
      <SwiperSlide className={Styles.slide3}>
      <div className={'container'}>
      <Fade  direction="up" duration={500} triggerOnce={true}>
      <div className= {Styles.inner}>
      <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
        <div className={Styles.btns}>
            <button>Get Appointment</button>
            <button>Contact Now</button>
        </div>
        </div></Fade>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className={Styles.boxs}>
      <div className='container' id={Styles.boxs}>
      <div className={Styles.box}>
        <div className={Styles.icon}>
          <span><CiMedicalCross /></span>
        </div>
        <span>Lorem Amet</span>
        <h3>Emergency Cases</h3>
        <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
        <Link href="" >LEARN MORE <span><FaLongArrowAltRight /></span></Link>
        </div> 
        <div className={Styles.box}>
        <div className={Styles.icon}>
          <span><FaNotesMedical /></span>
        </div>
        <span>Fusce Porttitor</span>
        <h3>Doctors Timetable</h3>
        <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
        <Link href="">LEARN MORE <span><FaLongArrowAltRight /></span></Link>
        </div>
        <div className={Styles.box}>
        <div className={Styles.icon}>
          <span><TbClockHour10 /></span>
        </div>
        <span>Donec luctus</span>
        <h3>Opening Hours</h3>
        <div className={Styles.daysOfWork}>
        <p>
          <span>Monday - Fridayp</span>
          <span>8.00-20.00</span>
        </p>
        <p>
          <span>Saturday</span>
          <span>9.00-18.30</span>
        </p> 
        <p>
          <span>Monday - Thusday</span>
          <span>9.00-15.00</span>
        </p>
        </div>
        <Link href="">LEARN MORE <span><FaLongArrowAltRight /></span></Link>
        </div>
    </div></div>
    </div>
  )
}
