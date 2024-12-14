import React from 'react';
import Styles from '../../style/Contact.module.css';
import { TbActivityHeartbeat } from "react-icons/tb";
import Image from 'next/image';

export default function Contact() {
  return (
    <div className={Styles.contact}>
         <div className='head'>
                <h1>We Are Always Ready to Help You. Book An Appointment</h1>
                <span><TbActivityHeartbeat /></span>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            </div>
        <div className='container' id={Styles.contactContent}>
            <div className={Styles.fSection}>
            <div className={Styles.contactForm}>
                <form >
                <input type='text' placeholder='Name' />
                <input type='mail' placeholder='E-mail' />
                <input type='number' placeholder='phone' />
                <select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
                </select>
                <select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
                </select>
                <input type='date' placeholder='E-mail' />
                <textarea placeholder='Your Message'></textarea>
                <input type='submit'  placeholder='Make An Appointment' value='Book An Appointment'/> 
                <span>( We will be confirm by an Text Message )</span>
                </form>
            </div>
            <div className={Styles.image}>
                <Image src={require('./images/contact.jpg')} alt="photo" />
            </div>
        </div>
            </div>
            <div className={Styles.lSection}>
            <div className='container' id={Styles.lSection}>
            <div className={Styles.contactText}>
                <h3>Sign up for newsletter</h3>
                <p>Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                homero alterum.</p>
            </div>
            <div className={Styles.contactMail}>
                    <input type='Text' placeholder='Your E-mail Address' />
                    <input type='submit'  placeholder='Make An Appointment' value='Subscribe' /> 
            </div>
            </div>
            </div>
    </div>
  )
}
