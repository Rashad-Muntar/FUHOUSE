import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpider } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=" w-[90%] flex justify-between items-center">
      <FontAwesomeIcon icon={faSpider} width={40} height={40} className="border-2"/>
      <div className="flex  min-w-[25rem] justify-between items-center">
        <a>
          <Link href="#">Home</Link>
        </a>
        <a >
          <Link href="#">About</Link>
        </a>
        <a >
          <Link href="#">Service</Link>
        </a>
        <a >
          <Link href="#">Portfolio</Link>
        </a>
        <a >
          <Link href="#">Blog</Link>
        </a>
        <a  className='bg-primary-default text-white px-5 py-4'>
          <Link href="#">Blog</Link>
        </a>
      </div>
    </div>
  )
}

export default Navbar
