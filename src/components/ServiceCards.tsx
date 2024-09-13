import Image from "next/image"
import React from "react"

interface IServiceCards{
    title: string
    content: string
    image: string
    button: string
    link: string
}
const ServiceCards:React.FC<IServiceCards> = ({title, content, image, button, link}) => {

    return (
        <div>
            <Image src={image} width={200} height={200} alt="" />
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