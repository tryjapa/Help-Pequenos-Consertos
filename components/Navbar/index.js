import React , { useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import styles from './navbar.module.css'
import {FaLinkedin, FaFacebookF,FaTwitter, FaHamburger} from 'react-icons/fa'



const NavBar = () => {
	const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
    return (
		<ScrollableAnchor id={'main'}>
        <section id={styles.main}>
        <nav>
	
	<a href="#" className={styles.logo} >HELP pequenos consertos</a>
	
	<FaHamburger className={styles.toggle} onClick={handleToggle}/>
	<ul className={styles.menu}>		
	<li><a  className={styles.active} href="#main">Home</a ></li>
	<li><a  href="#about">Sobre nós</a >           </li>
	<li> <a  href="#services">Serviços</a ></li>
	<li><a  href="#contact-form">Contato</a ></li>
	
	</ul>
	
	
	</nav>
	<div className={styles.name}>
	
	<p>Bem vindo a</p>
	
	<h1><font color="#f13137">HELP</font> pequenos consertos</h1>
	
	<p className={styles.details}>Temos as melhores soluções em pequenos reparos, elétrica e hidráulica.</p>	
	</div>
		
	<div className={styles.blackLine} ></div>
	
	<div className={styles.social}>	
	<a href="https://www.facebook.com/helppequenosconsertos"  target="_blank"><FaFacebookF className={styles.reactIcons}/></a>
	</div>
    </section>
	</ScrollableAnchor>
    )
}

export default NavBar
