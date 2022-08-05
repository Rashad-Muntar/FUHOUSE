import Image from "next/image"
import heroImga from "../../public/images/heroImg.jpg"
const Hero = () => {
    return (
        <div className="border-2 w-full flex justify-between">
            <div className="max-w-[45%]">
                <h1>Find Real Estate \n That suits you</h1>
            <p>Find the all that you need in terms real esttate with ease.
                 Lets make your work very easy for you </p>
            </div>
            <div className="max-w-[45%]">
                <Image src={heroImga}/>
            </div>
        </div>
    )
}

export default Hero