import React ,{useState,useEffect} from 'react';
import Styles from '../../style/Top.module.css';

export default function Totop() {
    const [value,setValue] = useState(0);
    useEffect(() => {
    window.addEventListener("scroll" ,function (){window.scrollY >= 600 ? setValue(1) : setValue(0)}) 
})
  return (
    <div className={Styles.top}>
         {value === 1 && <button onClick={() => window.scrollTo(0,0)}>Up</button>}
    </div>
  )
}
