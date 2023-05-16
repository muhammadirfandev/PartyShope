import React from 'react'
import styles from './styles.module.scss'

export const DescTitle=(props)=>{


    return(<>
    <div className={styles.descTitle}>
    <h4>{props.title}</h4>
    <p>{props.description}</p>
    </div>
    
    </>);
}