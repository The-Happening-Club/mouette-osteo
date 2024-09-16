import Image from "next/image"
import React from "react"
import styles from "@/css/components/grid.module.css"

interface IServiceCards{
    title: string
    content: string
    image: string
    button: string
    link: string
}
const ServiceCards:React.FC<IServiceCards> = ({title, content, image, button, link}) => {

    return (
        <div className={styles.service_card}>
            <Image src={image} width={400} height={500} alt="" />
            <h1>
                {title}
            </h1>
            <p>
                {content}
            </p>
            <a href={link}>{button}</a>
        </div>
    )
}

export default ServiceCards