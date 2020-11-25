import React , { useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import styles from './lastjobs.module.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


const  LastJobs = () => {    
    
    return (        
        <ScrollableAnchor id={'last-jobs'}>
        <section id={styles.portfolio}>        
        <h1 className={styles["p-headind"]}>Últimos trabalhos</h1>        
        <div className={styles["p-container"]}>       
        <div className={styles["p-box"]}>       
            
    
         <ReactCompareSlider 
  itemOne={<ReactCompareSliderImage src="/roofOld.jpg"  alt="Antes" />}
  itemTwo={<ReactCompareSliderImage src="/roofNew.jpg"  alt="Depois" />}
/>
        </div>      
        <div className={styles["p-box"]}>       
          
          
    
         <ReactCompareSlider 
  itemOne={<ReactCompareSliderImage src="/oldTomada.jpg"  alt="Antes" />}
  itemTwo={<ReactCompareSliderImage src="/newTomada.jpg"  alt="Depois" />}
/>
        </div>      
          
        </div>
        </section>
        </ScrollableAnchor>
    )
}

export default LastJobs
