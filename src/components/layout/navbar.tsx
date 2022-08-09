import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpider } from '@fortawesome/free-solid-svg-icons'
import {
  Button
} from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=" w-full flex justify-between items-center">
      <FontAwesomeIcon icon={faSpider} width={40} height={40} className="border-2"/>
      <div className="flex justify-between w-[25rem] max-w-[30rem] items-center">
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
        <Button colorScheme='blue'>Contact</Button>
      </div>
    </div>
  )
}

export default Navbar
