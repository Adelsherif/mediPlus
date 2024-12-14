import React from 'react';
import Styles from '../../style/About.module.css';
import Image from 'next/image';
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdSlowMotionVideo } from "react-icons/md";



export default function About() {
  return (
    <div className={Styles.about}>
        <div className='container'>
         <div className='head'>
                <h1>We Offer Different Services To Improve Your Health</h1>
                <span><TbActivityHeartbeat /></span>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
        </div>
        <div className={Styles.aboutContent}>
            <div className={Styles.aboutText}>
                <h3>Who We Are</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis,
                     a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.</p>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <div className={Styles.aboutChoises}>
                    <ul>
                        <li><span><MdSlowMotionVideo /></span><span>Maecenas vitae luctus nibh.</span></li>
                        <li><span><MdSlowMotionVideo /></span><span>Maecenas vitae luctus nibh.</span></li>
                        <li><span><MdSlowMotionVideo /></span><span>Duis massa massa.</span></li>
                        <li><span><MdSlowMotionVideo /></span><span>Duis massa massa.</span></li>
                        <li><span><MdSlowMotionVideo /></span><span>Aliquam feugiat interdum.</span></li>
                        <li><span><MdSlowMotionVideo /></span><span>Aliquam feugiat interdum.</span></li>
                    </ul>
                </div>
            </div>
            <div className={Styles.aboutImage}>
                <div>
                <Image src={require('./images/about.jpg')} alt="photto" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
