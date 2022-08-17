import Image from 'next/image'
import { StaticImageData } from 'next/image'
import {genetrateColor} from "../../Utility/utils"

interface Props {
  image: string
  title: string
  timeStamp: string
  poster: string
  propertyType: string
  posterImg: StaticImageData
}
const ProductCard = ({
  image,
  title,
  timeStamp,
  poster,
  propertyType,
  posterImg,
}: Props) => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${image})`}} className="relative h-[15rem] bg-cover bg-center m-2 rounded-xl">
        <div className={`absolute bottom-0 rounded-xl mb-2 ml-2 p-0.1 px-2`} style={{backgroundColor: genetrateColor()}}>{propertyType}</div>
      </div>
      <div>
        <p className='text-primary-default font-semibold'>{title}</p>
        <small>{timeStamp}</small>
        <div className='flex mt-3'>
          <div className="relative min-h-[2rem] w-[2rem] rounded-full">
            <Image
              src={posterImg}
              alt="user1"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div>
            <small className='ml-3'>{poster}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
