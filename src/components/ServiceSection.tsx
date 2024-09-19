import React from "react";
import ServiceCards from "./ServiceCards";
import styles from "@/css/components/service_section.module.css"
import style from "@/css/components/grid.module.css"



const ServiceSection = () => {
    const contentArray = [
        {img: "/osteopathie.webp", title: "OSTÉOPATHIE",content: "Art de traiter manuellement les douleurs du patient en recherchant la cause du problème initial et en équilibrant tout le corps.", link: "", button:"En savoir plus" },
        {img: "/preparation_physique.webp", title: "PRÉPARATION PHYSIQUE",content: "Analyse et mise en place d&apos;exercices personnalisés, pour accompagner une récupération après blessure ou pour améliorer des performances.", link: "", button:"En savoir plus" },
        {img: "/accompagnement_physique.webp", title: "ACCOMPAGNEMENT PERSONNEL",content: "Mise en lumière de vos comportements en découvrant et en expliquant votre mécanique physique, psychique et émotionnelle.", link: "", button:"En savoir plus" },
        {img: "/acupuncture.webp", title: "ACUPUNCTURE",content: "Branche de la médecine chinoise permettant d&apos;équilibrer l&apos;énergie du corps, pour soigner ou prévenir des symptômes divers.", link: "", button:"En savoir plus" }
    ]
    return (
        <section className={styles.services_container}>
            <div className={styles.services_wrapper}>
                <h1>
                    MES SERVICES
                </h1>
                <p>
                    Pour mes patients (homme, femme, enfant, sportif) mon métier consiste à écouter, examiner, traiter et conseiller. <br /> Je mets en place une prise en charge cohérente et efficace, basée sur mon expérience et l&apos;évolution de la science.  
                </p>
            </div>
            <div className={style.wrapper}>

                {
                    contentArray.map((el, index) => (
                        <ServiceCards key={index} title={el.title} image={el.img} link={el.link} content={el.content} button={el.button} isReversed={index < 2 ? true : false}/>
                    ))
                }
            </div>
        </section>
    )
}

export default ServiceSection