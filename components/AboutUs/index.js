import React from 'react'
import styles from './aboutus.module.css'
import ScrollableAnchor from 'react-scrollable-anchor'

const AboutUs = () => {
    return (
        <ScrollableAnchor id={'about'}>
        <section id={styles.about}>
        <div class={styles['about-text']}>
        <h1>Sobre nós</h1>
        <h4>Hoje somos o que há de melhor em pequenos consertos aqui em Rio Claro e região.</h4>
        <p>Fundada a partir de uma ideia inovadora de prestar pequenos serviços à domicílio e com intuito de proporcionar maior comodidade para seus clientes.​ <br />
Meu nome é Odair Aparecido Oliveira, sou casado e pai de três lindos filhos, o Thiago, o Gabriel e a Lorena e moro em Rio Claro a mais de 15 anos. <br />
Desde a juventude fazia pequenos reparos em casa e na casa de parentes e em 2008, movido pela paixão no que fazia muito bem, resolvi fundar a Help Pequenos Consertos.<br />
</p>
<p>
                                                     Pequenos Consertos
                                                                                  Grandes Soluções </p>
        {/* <button>View More Details</button> */}
        </div>        
        
        <div class={styles['about-model']}>
        <img src="/logo.webp" alt="model"/>	
        </div>        
        </section>
        </ScrollableAnchor>
    )
}

export default AboutUs
