import Link from "next/link";
import React from "react";
import { PrimaryButton } from "./Button";
import styles from "@/css/components/navbar.module.css"

const NavBar = () => {

    return(
    <div className={styles.header}>
        <h1>
            FRANCK MOUETTE D.O
        </h1>
        <div className={styles.button_container}>
            <PrimaryButton title="Prendre Rendez-vous"/>
        </div>
        <nav className={styles.navbar}>
            <Link href={"/"}>Accueil</Link>
            <Link href={"/franck-mouette"}>Franck Mouette</Link>
            <Link href={"/cabinet-osteopathie"}>Cabinet D&apos;Ostéopathie</Link>
            <Link href={"/questions-reponses"}>Questions/Réponses</Link>
            <Link href={"/mes-conseils"}>Mes Conseils</Link>
            <Link href={"/mes-articles"}>Mes Articles</Link>
        </nav>
    </div>
    )
}

export default NavBar