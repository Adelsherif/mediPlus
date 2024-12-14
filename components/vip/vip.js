import React, { useState }  from 'react';
import Styles from '../../style/Vip.module.css';


export default function Vip() {
    const [toggle,setToggle] = useState(0);
    
  return (
    <div className={Styles.vip}>
        <div className={Styles.vipContent}>
        <div className={Styles.btn}><button onClick={() => toggle == 0 ? setToggle(1) : setToggle(0) }>Get Pro</button></div>
        <div className={toggle ? Styles.box : Styles.hiddenBox}>
            <ul>
                <li>Pro Version Available on Themeforest</li>
                <li>Pro Version Features</li>
                <li>2+ premade home pages</li>
                <li>20+ html pages</li>
                <li>Color Plate With 12+ Colors</li>
                <li>Sticky Header / Sticky Filters</li>
                <li>Working Contact Form With Google Map</li>
            </ul>
            <button>Pro Vision Demo</button>
            <button>Buy Rro Vision</button>
        </div>
        </div>
    </div>
  )
}
