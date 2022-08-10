import user1 from "../../../public/images/user1.jpg"
import user2 from "../../../public/images/user2.jpg"
import user3 from "../../../public/images/user3.jpg"
import Image from "next/image"
const Testimony = () => {
    return (
        <div className="mt-10 ml-1">
            <div className="flex items-center">
                <div className="relative min-h-[4rem] w-[4rem] rounded-full">
                <Image src={user1} alt="user1" layout="fill" className="rounded-full"/>
                </div>
                <div className="relative h-[4rem] w-[4rem] left-[-30px] rounded-full">
                <Image src={user2} alt="user1" layout="fill" className="rounded-full"/>
                </div>
                <div className="relative h-[4rem] w-[4rem] left-[-60px] rounded-full border-white-200">
                <Image src={user3} alt="user1" layout="fill" className="rounded-full"/>
                </div>
                <div className=" relative left-[-50px]">
                    <p className="font-semibold">18k+ people</p>
                    <small>Shared their experience</small>
                </div>
            </div>
           
           
        </div>
    )
}

export default Testimony