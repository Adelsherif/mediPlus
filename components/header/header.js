import React, { useState } from 'react';
import Styles from '../../style/Header.module.css';
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from './images/logo.png';
import { HiOutlineBars3 } from "react-icons/hi2";

export default function Header() {
    let [toggle,setToggle] =useState(false);
  return (
    <div className={Styles.header}>
            <div className={Styles.fHead} >
                <div className='container' id={Styles.innerHeader}>
                <div className={Styles.list}>
                    <ul>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Doctors</Link></li>
                        <li><Link href="#">Contact</Link></li>
                        <li><Link href="#">EAQ</Link></li>
                    </ul>
                </div>
                <div className={Styles.toContact}>
                    <div className={Styles.contact}>
                        <span><FaPhoneAlt /></span>
                        <span>+880 1234 56789</span>
                    </div>
                    <div className={Styles.email}>
                    <span><MdEmail /></span>
                    <span><Link href="mailto:support@yourmail.com"> support@yourmail.com</Link></span>
                    </div>
                </div>
            </div>
        </div>

            <div className={Styles.lHead}>
                <div className='container' id={Styles.innerHeader}>
                    <div className={Styles.logo}>
                        <Image src={logo} alt="photo"/>
                    </div>
                    <div className={Styles.bars} onClick={() => toggle? setToggle(false): setToggle(true)}><HiOutlineBars3 /></div>
                    <div className={toggle ? Styles.responsivePartion : Styles.partion}>
                    <div className={Styles.links}>
                        <ul className={Styles.fList}>
                            <li>
                                <Link href='' className={Styles.homeLink}>Home<span> <RiArrowDropDownLine /></span></Link>
                                    <div>
                                    <ul>
                                        <li><Link href=''>Home Page</Link></li>
                                    </ul></div>
                            </li>
                            <li><Link href=''>Doctors</Link></li>
                            <li><Link href=''>Services</Link></li>
                            <li>
                                <Link href=''>Pages<span> <RiArrowDropDownLine /></span></Link>
                                <ul>
                                        <li><Link href=''>404 Page</Link></li>
                                    </ul>
                                </li>
                            <li>
                                <Link href=''>Blogs<span> <RiArrowDropDownLine /></span></Link>
                                <ul>
                                        <li><Link href=''>Blogs</Link></li>
                                    </ul>
                                </li>
                            <li><Link href=''>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={Styles.booking}>
                        <button>Book Appointment</button>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
