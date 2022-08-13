import Headings from '../../shared/headings'
import SectionWrapper from '../../shared/sectionWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faSearch,
  faMoneyBill,
  faHouse,
} from '@fortawesome/free-solid-svg-icons'

const HowItWorks = () => {
  return (
    <SectionWrapper>
      <div className='flex justify-center  flex-col'>
        <Headings title="How it works" />
        <div className='flex'>
          <div className=' flex flex-col items-center m-12'>
            <FontAwesomeIcon
              icon={faSearch}
              className="max-w-[4rem] bg-primary-default p-6 rounded-2xl text-white"
            />
            <p className='font-semibold mt-6'>Research Suburbs</p>
            <small className='text-primary-default text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quibusdam rem! Esse optio quisquam fuga facilis iste sint
              accusamus dignissimos nemo. Adipisci
            </small>
          </div>

          <div className='flex flex-col items-center m-12'>
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="max-w-[4rem] bg-primary-default p-6 rounded-2xl text-white"
            />
            <p className='font-semibold mt-6'>Research Suburbs</p>
            <small className='text-primary-default text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quibusdam rem! Esse optio quisquam fuga facilis iste sint
              accusamus dignissimos nemo. Adipisci
            </small>
          </div>

          <div className='flex flex-col items-center m-12'>
            <FontAwesomeIcon
              icon={faHouse}
              className="max-w-[4rem] bg-primary-default p-6 rounded-2xl text-white"
            />
            <p className='font-semibold mt-6'>Research Suburbs</p>
            <small className='text-primary-default text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quibusdam rem! Esse optio quisquam fuga facilis iste sint
              accusamus dignissimos nemo. Adipisci
            </small>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default HowItWorks
