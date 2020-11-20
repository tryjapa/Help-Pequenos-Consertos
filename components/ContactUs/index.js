import React from 'react'
import styles from './contact.module.css'
import ScrollableAnchor from 'react-scrollable-anchor'

const ContactUs = () => {
    return (
    
		<ScrollableAnchor id={'contact-form'}>
	<section id={styles["contact-form"]}>
	<form>
	
	<div className={styles["contact-left"]}>
	<h1 className={styles["c-l-heading"]}><font className={styles['green-border']}>Contato</font></h1>
	
	<div className={styles["f-name"]}>
	<font >Nome</font>
	<input type="text" placeholder="Seu nome"/>
	</div>

	<div className={styles["f-email"]}>
	<font >Email</font>
	<input type="email" placeholder="Example@gmail.com"/>
	</div>

	<div className={styles["f-telefone"]}>
	<font >Telefone</font>
	<input type="text" placeholder="19 9888 1111"/>
	</div>
	</div>

	
	
	<div className={styles["contact-right"]}>
	
	<div className={styles["message"]}>
	<font >Menssagem</font>
	<textarea name="message" rows="5" cols="20" placeholder="Sinta-se a vontade para entrar em contato para qualquer projeto, nós teremos prazer em esclarecer suas dúvidas...."></textarea>
	</div>
	
	<button>Enviar</button>
	</div>
		
	</form>
	
	</section>
	</ScrollableAnchor>
    )
}

export default ContactUs
