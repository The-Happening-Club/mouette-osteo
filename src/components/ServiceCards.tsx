import Image from "next/image"
import React from "react"
import styles from "@/css/components/grid.module.css"

interface IServiceCards{
    title: string
    content: string
    image: string
    button: string
    link: string
    isReversed: boolean
}
const ServiceCards:React.FC<IServiceCards> = ({title, content, image, button, link, isReversed}) => {
    

    return (
        <div className={styles.service_card} style={isReversed ? {flexDirection: 'row-reverse'} : {flexDirection: 'row'}}>
            <div className={styles.service_card_image}>
                <Image src={image} width={400} height={500} alt="" />
            </div>
            <div className={styles.service_card_description} style={{display: "flex", justifyContent: "center"}}>
                  <div style={ {display:"flex", flexDirection: "column", gap: "20px", width: "75%", maxHeight: "75%", aspectRatio: 1}}>
                    <header>
                        {title}
                    </header>
                    <p>
                        {content}
                    </p>
                    <div>   
                         <a href={link}>{button}</a>
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default ServiceCards