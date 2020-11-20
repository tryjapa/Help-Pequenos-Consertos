import React from 'react'
import styles from './services.module.css'
import ScrollableAnchor from 'react-scrollable-anchor'

const Services = () => {
    return (
        <ScrollableAnchor id={'services'}>
        <section id={styles.services}>
	
            <div className={styles["s-heading"]}>
            <h1>Serviços</h1>
            <p>Efetuamos serviços em residências, comércios, pequenas industrias, shoppings, etc.</p>
            </div>
           
                <div className={styles["b-container"]}>                
                    <div className={styles["s-box"]}>           
                        <div className={styles["s-b-img"]}>               
                            <div className={styles["s-type"]}>Elétrica</div>                
                            <img src="/s1.png"/>
                        </div>           
                        <div className={styles["s-b-text"]}>
                        <a title="Instalação de toda parte elétrica, lustre pifado, lâmpadas para trocar, tomada não funciona, instalação de extensão elétrica, chuveiro não esquenta, lâmpadas não acendem, escritório cheira queimado, fiação das mesas bagunçadas, tomadas velhas, mudança da voltagem das tomadas, interruptor pifado, entre outros" href="#">Instalação de toda parte elétrica, lustre pifado, lâmpadas para trocar, tomada não funciona, instalação de extensão elétrica, chuveiro não esquenta, lâmpadas não acendem, escritório cheira queimado, fiação das mesas bagunçadas, tomadas velhas, mudança da voltagem das tomadas, interruptor pifado, entre outros</a>	
                        </div>
                    </div>                
                    <div className={styles["s-box"]}> 
                        <div className={styles["s-b-img"]}>                       
                            <div className={styles["s-type"]}>Serviços Gerais</div>                        
                            <img src="/s3.jpg"/>
                        </div>
                        <div className={styles["s-b-text"]}>
                        <a title="Instalação de quadros, diplomas, TV, slides, depuradora, filtros de água, maçaneta da porta não funciona, porta do banheiro não fecha, instalação de quadros de aviso, instalação de fechaduras, troca de porta, conserto das portas das gavetas, lâmpada queimadas, , vaso sanitário não funciona, torneira pingando, pia entupiu, porta não fecha, prateleira para instalar, fiação desarmada, entre outros."href="#">Instalação de quadros, diplomas, TV, slides, depuradora, filtros de água, maçaneta da porta não funciona, porta do banheiro não fecha, instalação de quadros de aviso, instalação de fechaduras, troca de porta, conserto das portas das gavetas, lâmpada queimadas, , vaso sanitário não funciona, torneira pingando, pia entupiu, porta não fecha, prateleira para instalar, fiação desarmada, entre outros.</a>	
                        </div>
                    </div>
                    <div className={styles["s-box"]}>           
                        <div className={styles["s-b-img"]}>               
                            <div className={styles["s-type"]}>Hidráulica</div>                
                            <img src="/s2.png"/>
                        </div>           
                        <div className={styles["s-b-text"]}>
                        <a title="Instalação de toda parte hidráulica, válvula Hidra disparada, torneira pingando, vaso sanitário solto, pia entupida, torneira pingando, torneira solta, ralo entupido" href="#">Instalação de toda parte hidráulica, válvula Hidra disparada, torneira pingando, vaso sanitário solto, pia entupida, torneira pingando, torneira solta, ralo entupido</a>	
                        </div>
                    </div>

            </div>
            
               
        </section>
        </ScrollableAnchor>
    )
}

export default Services
