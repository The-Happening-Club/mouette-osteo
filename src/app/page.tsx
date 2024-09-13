import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home(){

  return(
    <div>
      <NavBar />
      <h1>
        FRANCK MOUETTE
      </h1>
      <p>
        Ostéopathe D.O
      </p>
      <p>
      Diplômé en kinésithérapie et en ostéopathie depuis plus de 30 ans, j’ai ouvert en 2005 le Centre des Deux Mains.
      </p>
      <Footer />
    </div>
  )
}
