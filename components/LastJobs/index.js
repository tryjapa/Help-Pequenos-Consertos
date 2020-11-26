import React , { useState } from 'react'
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
import styles from './lastjobs.module.css'
import ReactCompareImage from 'react-compare-image'


const  LastJobs = () => {    
   

    return (        
        <ScrollableAnchor id={'last-jobs'}>
        <section id={styles.portfolio}>        
        <h1 className={styles["p-headind"]}>Últimos trabalhos</h1>        
        <div className={styles["p-container"]}>       
        <div className={styles["p-box"]}>       
        <ReactCompareImage aspectRatio="wider" leftImage="/oldTomada.jpg" leftImageLabel="Antes" rightImage="/newTomada.jpg" rightImageLabel="Depois"  sliderLineColor="#95b9d5" sliderLineWidth="3" handleSize="60"/>   
 
        </div>      
        <div className={styles["p-box"]}>       
        <ReactCompareImage aspectRatio="wider"leftImage="/roofOld.jpg" leftImageLabel="Antes" rightImage="/roofNew.jpg" rightImageLabel="Depois" sliderLineColor="#95b9d5" sliderLineWidth="3" handleSize="60" />   
 
        </div>  
         
          
        </div>
        </section>
        </ScrollableAnchor>
    )
  
}

export default LastJobs
