import React from "react";
import styles from "@/css/components/footer.module.css"


const Footer = () => {

    return(

    <div className={styles.footer_container}>
        <h1>
            Franck Mouette D.O
        </h1>
        <div className={styles.footer_wrapper}>
            <a href="mailto:centredesdeuxmains@free.fr">centredesdeuxmains@free.fr</a>
            <p>
                00 33 6 11 91 16 54 <br />
                Place de la Mairie, Les Orchidées, Bâtiment 2, 01710 Thoiry, France
            </p>
        </div>
        <div className={styles.footer_social}>
            <a href={"https://www.instagram.com/mouetteosteo/"}><img src="/instagram_icon.png" width={20} height={20} alt="Instagram"/></a>
            <a href={"https://www.linkedin.com/in/franck-mouette-718369204/"}><img src="/linkedin_icon.png" width={20} height={20} alt="LinkedIn"/></a>
            <a href={"https://www.facebook.com/people/mouetteosteo/61555581773526/"}><img src="/facebook_icon.png" width={20} height={20} alt="Facebook"/></a>
        </div>
        <p>
            ©2024 by Lucas Mouette
        </p>
    </div>
   
    )
}

export default Footer