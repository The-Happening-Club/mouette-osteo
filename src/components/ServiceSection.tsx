import React from "react";
import ServiceCards from "./ServiceCards";

const ServiceSection = () => {

    return (
        <div>
            <h1>
                MES SERVICES
            </h1>
            <p>
                Pour mes patients (homme, femme, enfant, sportif) mon métier consiste à écouter, examiner, traiter et conseiller. Je mets en place une prise en charge cohérente et efficace, basée sur mon expérience et l'évolution de la science.  
            </p>
            <ServiceCards image="" title="OSTÉOPATHIE" content="Art de traiter dmanuellement les douleurs du patient en recherchant la cause du problème initial et en équilibrant tout le corps." link="" button="En savoir plus"/>
            <ServiceCards image="" title="PRÉPARATION PHYSIQUE" content="Analyse et mise en place d'exercices personnalisés, pour accompagner une récupération après blessure ou pour améliorer des performances." link="" button="En savoir plus"/>
            <ServiceCards image="" title="ACCOMPAGNEMENT PERSONNEL" content="Mise en lumière de vos comportements en découvrant et en expliquant votre mécanique physique, psychique et émotionnelle." link="" button="En savoir plus"/>
            <ServiceCards image="" title="ACUPUNCTURE" content="Branche de la médecine chinoise permettant d’équilibrer l’énergie du corps, pour soigner ou prévenir des symptômes divers." link="" button="En savoir plus"/>
        </div>
    )
}

export default ServiceSection