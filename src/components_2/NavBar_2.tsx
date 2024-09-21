import React from "react";
import Link from "next/link";
import Image from "next/image"
import styles from "@/css/components_2/navbar_2.module.css"

const NavBar = () => {

    return(
        <section className={styles.container}>
            <div className={styles.header}>
                Franck Mouette D.O
            </div>
            <div className={styles.image}>
                {/* <Image  src="/logo.webp"
                        width={200}
                        height={200}
                        alt="Photo de deux mains en noir et blanc"
                /> */}
            </div>
            <nav className={styles.navbar}>
                <Link href={"/"}>Accueil</Link>
                <Link href={"/franck-mouette"}>Franck Mouette</Link>
                <Link href={"/cabinet-osteopathie"}>Cabinet D&apos;Ostéopathie</Link>
                <Link href={"/questions-reponses"}>Questions/Réponses</Link>
                <Link href={"/mes-conseils"}>Mes Conseils</Link>
                <Link href={"/mes-articles"}>Mes Articles</Link>
            </nav>
            <div className={styles.content}>
                <a href="">Je suis un bouton</a>
            </div>            
        </section>
    )
}

export default NavBar