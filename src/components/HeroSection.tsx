import React from "react";
import Image from "next/image";
import styles from "@/css/components/hero_section.module.css"

const HeroSection = () => {

    return(
        <main className={styles.container}>
            <div className={styles.image_container}>
                <Image src="/franck_mouette.webp" width={1000} height={1000} style={{height:"100%", width:"100%"
                }} alt="Photo de Franck Mouette avec une colonne vertébrale."/>
            </div>
            <div className={styles.content_container}>
                <div className={styles.content_wrapper}>
                    <h1>
                        FRANCK <br /> MOUETTE
                    </h1>
                    <h4>
                        Ostéopathe D.O
                    </h4>
                    <p>
                    Diplômé en kinésithérapie et en ostéopathie depuis plus de 30 ans, j’ai ouvert en 2005 le Centre des Deux Mains.
                    </p>
                </div>
            </div>  
        </main>

    )
}

export default HeroSection