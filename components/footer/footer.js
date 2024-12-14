import React from 'react';
import Styles from '../../style/Footer.module.css';
import Link from 'next/link';
import { FaFacebookF,FaGooglePlusG,FaTwitter,FaLinkedinIn,FaInstagram,FaTelegramPlane} from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";



export default function Footer() {
  return (
    <div className={Styles.footer}>
        <div className='container' id={Styles.footerContent}>
            <div className={Styles.section1}>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                <ul>
                    <li><Link href="#"><FaFacebookF /></Link></li>
                    <li><Link href="#"><FaGooglePlusG /></Link></li>
                    <li><Link href="#"><FaInstagram /></Link></li>
                    <li><Link href="#"><FaLinkedinIn /></Link></li>
                    <li><Link href="#"><FaTwitter /></Link></li>
                </ul>
            </div>
            <div className={Styles.section2}>
                <h3>Quick Links</h3>
                <div className={Styles.lists}>
                    <ul>
                    <li><Link href="#"><MdArrowRight /> Home</Link></li>
                    <li><Link href="#"><MdArrowRight /> About Us</Link></li>
                    <li><Link href="#"><MdArrowRight /> Services</Link></li>
                    <li><Link href="#"><MdArrowRight /> Our Cases</Link></li>
                    <li><Link href="#"><MdArrowRight /> Other Links</Link></li>
                    <li><Link href="#"><MdArrowRight /> consuling</Link></li>
                    <li><Link href="#"><MdArrowRight /> finance</Link></li>
                    <li><Link href="#"><MdArrowRight /> testmonious</Link></li>
                    <li><Link href="#"><MdArrowRight /> FAQ</Link></li>
                    <li><Link href="#"><MdArrowRight /> Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className={Styles.section3}>
                <h3>Open Hours</h3>
                <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                <ul>
                    <li> <span>Monday - Fridayp</span>
                    <span>8.00-20.00</span>
                    </li>
                    <li>  <span>Saturday</span>
                    <span>9.00-18.30</span>
                    </li>
                    <li>
                    <span>Monday - Thusday</span>
                    <span>9.00-15.00</span>
                    </li>
                </ul>
            </div>
            <div className={Styles.section4}>
                <h3>Newsletter</h3>
                <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                <div className={Styles.form}>
                    <form>
                        <input type='email' placeholder='Enter your email' />
                        <button><FaTelegramPlane /></button>
                    </form>
                </div>
            </div>
        </div>
        <div className={Styles.copyright}>© Copyright 2024 | All Rights Reserved by Adel Sherif</div>
    </div>
  )
}
