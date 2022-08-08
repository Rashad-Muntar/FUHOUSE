import Image from "next/image"
import heroImga from "../../public/images/heroImg.jpg"
const Hero = () => {
    return (
        <div className="mt-4 w-full flex justify-between items-center">
            <div className="max-w-[45%]">
                <h1 className="text-[3rem] font-bold text-primary-default m-0 p-0">Find Real Estate That suits you</h1>
            <p className="mt-6 text-primary-300">Find the all that you need in terms real esttate with ease.
                 Lets make your work very easy for you </p>
                 
            </div>
            <div className="max-w-[45%]">
                <Image src={heroImga}/>
            </div>
        </div>
    )
}

export default Hero