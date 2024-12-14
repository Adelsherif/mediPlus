import React from 'react';
import Image from 'next/image';
import Styles from '../../style/News.module.css';
import { TbActivityHeartbeat } from "react-icons/tb";



export default function News() {
  return (
    <div  className={Styles.news}>
        <div className='head'>
            <h1>Keep up with Our Most Recent Medical News.</h1>
            <span><TbActivityHeartbeat /></span>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
        </div>
        <div className='container' id={Styles.newsContent}>
            <div className={Styles.newBox}>
                <div className={Styles.newImage}>
                    <Image src={require('./images/about-img.jpg')} alt ="photo" />
                </div>
                <button>22 Aug, 2020</button>
                <h3>We have annnocuced our new product.</h3>
                <p>Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
            </div>
            <div className={Styles.newBox}>
                <div className={Styles.newImage}>
                    <Image src={require('./images/about-img.jpg')} alt ="photo" />
                </div>
                <button>22 Aug, 2020</button>
                <h3>Top five way for solving teeth problems.</h3>
                <p>Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
            </div>
            <div className={Styles.newBox}>
                <div className={Styles.newImage}>
                    <Image src={require('./images/about-img.jpg')} alt ="photo" />
                </div>
                <button>22 Aug, 2020</button>
                <h3>We provide highly business soliutions.</h3>
                <p>Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
            </div>
        </div>
    </div>
  )
}
