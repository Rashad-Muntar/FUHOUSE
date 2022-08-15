import { StaticImageData } from "next/image"
import Image from "next/image"



interface Props {
    image: StaticImageData
    styles: string
    homeType: string
    title:string
    shortDesc: string
}
const ProductCard  = ({  
    image,
    styles,
    homeType,
    title,
    shortDesc}:Props) => {
    return (
        <div>
            <div>
                <Image src={image}/>
                <div>{homeType}</div>
            </div>
            <p>{title}</p>
            <p>{shortDesc}</p>
        </div>
    )
}

export default ProductCard