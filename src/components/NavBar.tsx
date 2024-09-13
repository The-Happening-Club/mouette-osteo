import Link from "next/link";
import React from "react";

const NavBar = () => {

    return(
    <div>
        <h1>
            Franck Mouette D.O
        </h1>
        <Link href={"/"}>Prendre Rendez-vous</Link> 
        <nav>
            <Link href={"/"}>Accueil</Link>
            <Link href={"/franck-mouette"}>Franck Mouette</Link>
            <Link href={"/cabinet-osteopathie"}>Cabinet D'Ostéopathie</Link>
            <Link href={"/questions-reponses"}>Questions/Réponses</Link>
            <Link href={"/mes-conseils"}>Mes Conseils</Link>
            <Link href={"/mes-articles"}>Mes Articles</Link>
        </nav>
    </div>
    )
}

export default NavBar