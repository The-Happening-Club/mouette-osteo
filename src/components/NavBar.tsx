import Link from "next/link";
import React from "react";

const NavBar = () => {
    return(
      <nav>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/"}>Franck Mouette</Link>
        <Link href={"/"}>Cabinet D'Ostéopathie</Link>
        <Link href={"/"}>Questions/Réponses</Link>
        <Link href={"/"}>Mes Conseils</Link>
        <Link href={"/"}>Mes Articles</Link>
      </nav>  
    )
}

export default NavBar