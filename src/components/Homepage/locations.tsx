import Headings from "../../shared/headings"
import SectionWrapper from "../../shared/sectionWrapper"
import accra from "../../../public/images/accra.jpg"
import kumasi from "../../../public/images/kumasi.jpg"
import takoradi from "../../../public/images/takoradi.jpg"
import sunyani from "../../../public/images/sunyani.jpg"
import Image from "next/image"

const Locations  = () => {
    return (
        <SectionWrapper>
            <Headings title="We are available this cities" />
        <div className="flex">
            <div style={{backgroundImage: "url(/images/accra.jpg)"}} className="relative w-[24%] h-[15rem] bg-cover bg-center m-2 rounded-xl" >
                {/* <Image src={accra}  className="rounded-3xl" layout="intrinsic"/> */}
                <div className="absolute w-[100%] flex items-center justify-center pt-6"><p className="font-bold text-xl">Accra</p></div>
            </div>
            <div style={{backgroundImage: "url(/images/kumasi.jpg)"}} className="relative w-[24%] h-[15rem] bg-cover bg-center m-2 rounded-xl">
                {/* <Image src={accra}  className="rounded-3xl" layout="intrinsic"/> */}
                <div className="absolute w-[100%] flex items-center justify-center pt-6"><p className="font-bold text-xl">Kumasi</p></div>
            </div>
            <div style={{backgroundImage: "url(/images/takoradi.jpg)"}} className="relative w-[24%] h-[15rem] bg-cover bg-center m-2 rounded-xl">
                {/* <Image src={accra}  className="rounded-3xl" layout="intrinsic"/> */}
                <div className="absolute w-[100%] flex items-center justify-center pt-6"><p className="font-bold text-xl">Takoradi</p></div>
            </div>
            <div style={{backgroundImage: "url(/images/sunyani.jpg)"}} className="relative w-[24%] h-[15rem] bg-cover bg-center m-2 rounded-xl">
                {/* <Image src={accra}  className="rounded-3xl" layout="intrinsic"/> */}
                <div className="absolute w-[100%] flex items-center justify-center pt-6"><p className="font-bold text-xl">Sunyani</p></div>
            </div>
        </div>
        </SectionWrapper>
    )
}

export default Locations