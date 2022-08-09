import Image from "next/image"
import heroImga from "../../../public/images/heroImg.jpg"
import { FormControl, Input } from "@chakra-ui/react"
import Button from "../shared/button"
const Hero = () => {
    return (
        <div className="mt-4 w-full flex justify-between items-center">
            <div className="max-w-[45%]">
                <h1 className="text-[3rem] font-bold text-primary-default m-0 p-0">Find Real Estate That suits you</h1>
            <p className="mt-6 text-primary-300">Find the all that you need in terms real esttate with ease.
                 Lets make your work very easy for you </p>
                 
                 <FormControl className="flex border-2 rounded-r-full  pl-3 mt-12">
                    <Input  variant='unstyled' type='email' placeholder="Search for property"/>
                    <Button title="Search" styles="rounded-full py-2 px-4 text-white bg-primary-default hover:bg-primary-300 focus:outline-none"/>
                </FormControl>
            </div>
            <div className="max-w-[45%]">
                <Image src={heroImga}/>
            </div>
        </div>
    )
}

export default Hero