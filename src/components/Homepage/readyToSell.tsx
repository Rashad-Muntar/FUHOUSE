import SectionWrapper from '../../shared/sectionWrapper'
import Headings from '../../shared/headings'
import heroImga from '../../../public/images/heroImg.jpg'
import Image from 'next/image'
import user1 from '../../../public/images/user1.jpg'
import { Button } from '@chakra-ui/react'

const ReadyToSell = () => {
  return (
    <SectionWrapper>
      <Headings title="Ready to sell" />
      <div className="flex justify-between">
        <div className="w-[48%]">
          <h2 className="tex-primary-default font-semibold text-xl">
            Let us sell your property with ease
          </h2>
          <p className="my-3 text-primary-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ea, eligendi sed ullam facilis dolorum molestiae porro quos odio
            eius animi ipsam itaque!
          </p>
          <div className="flex flex-wrap text-primary-default">
            <p className="w-[32%] my-1">Free estimate</p>
            <p className="w-[32%] my-1">Free estimate</p>
            <p className="w-[32%] my-1">Free estimate</p>
            <p className="w-[32%] my-1">Free estimate</p>
            <p className="w-[32%] my-1">Free estimate</p>
            <p className="w-[32%] my-1">Free estimate</p>
          </div>
          <div className="flex mt-6">
            <div className="relative min-h-[2rem] w-[3rem] rounded-full">
              <Image
                src={user1}
                alt="user1"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className='flex items-center'>
              <div className="">
                <small className="ml-6 font-semibold" >Lets hear from you</small>
                <p className="ml-6 text-s">we are available 24/4</p>
              </div>
              <Button className="bg-primary-default ml-6" size="xs">
                Call us
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[48%]">
          <Image src={heroImga} />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ReadyToSell
