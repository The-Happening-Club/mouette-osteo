import React from "react";
import styles from "@/css/components/hero_section.module.css"

export default function FranckMouette() {

    return (
        <main className={styles.container}>
            <div className={styles.image_container_border}>
                <img src="/franck_mouette_pp.webp" width={500} height={500} alt="Photo de Franck Mouette"/>
            </div>
            <div className={styles.content_wrapper}>
                    <h1>
                        FRANCK MOUETTE
                    </h1>
                    <h4>
                        Ostéopathe D.O
                    </h4>
                    <a href="">Me contacter</a>
            </div>
            <div>
            </div>
        </main>
    )
}