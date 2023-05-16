import React from "react";
import styles from './styles.module.scss'

export const IconWithtext = (props)=>{


    return(<>
    
    <div className={styles.iconWithText}>
    <img src={props.icon} alt={props.alt} />
    <p>{props.text}</p>
    </div>
    
    </>);
}