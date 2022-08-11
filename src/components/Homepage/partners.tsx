import Image from 'next/image'
import tiket from '../../../public/images/tiket.png'
import traveloka from '../../../public/images/traveloka.png'
import airbnb from '../../../public/images/airbnb.png'
import tripadvisor from '../../../public/images/tripadvisor.png'
const Partners = () => {
  return (
    <div className="flex justify-between items-center mt-12">
      <div className="w-[15rem] relative">
        <Image src={traveloka} />
      </div>
      <div className="w-[15rem] relative">
        <Image src={tiket} />
      </div>
      <div className="w-[15rem] relative">
        <Image src={airbnb} />
      </div>
      <div className="w-[15rem] relative">
        <Image src={tripadvisor} />
      </div>
    </div>
  )
}

export default Partners
