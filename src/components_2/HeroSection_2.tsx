import React from "react";
import Image from "next/image";

import styles from "@/css/components_2/hero_section_2.module.css"

const HeroSection = () => {

    return(
        <section className={styles.container}>
            <div className={styles.background_image}>
                <Image  src="/hands_b&w.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="Photo de deux mains en noir et blanc"
                />
            </div>
            <div className={styles.content}>
                <h1>CENTRE DES DEUX MAINS</h1>
            </div>
            <div className={styles.content}>
                <a href="">Prendre rendez-vous</a>
            </div>
        </section>
    )
}

export default HeroSection