import React, {useEffect} from 'react'
import styles from './styles.module.css'

export default function DisableOnLoadTrans (props) {
  useEffect(()=>{
    window.onload = function (ev){
      document.getElementsByClassName(styles.preload)[0].removeAttribute("class")
    }
  },[])
  return <div className={styles.preload}>{props.children}</div>
}
