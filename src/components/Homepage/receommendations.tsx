import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import Headings from '../../shared/headings'
import SectionWrapper from '../../shared/sectionWrapper'
import ProductCard from '../../shared/productCard'
import accra from '../../../public/images/accra.jpg'
import kumasi from '../../../public/images/kumasi.jpg'
import takoradi from '../../../public/images/takoradi.jpg'
import Carousel from 'react-bootstrap/Carousel'
import sunyani from '../../../public/images/sunyani.jpg'
import user1 from '../../../public/images/user1.jpg'

import 'swiper/css/navigation'

const Recommendations = () => {
  return (
    <SectionWrapper>
      <Headings title="Our recommendations" />
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        navigation
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ProductCard
            image="/images/home1.jpg"
            propertyType="residential"
            title="Semi detache flat"
            posterImg={user1}
            poster="Rashad"
            timeStamp="4 min. ago"
          />
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard
            image="/images/home2.jpg"
            propertyType="residential"
            title="Semi detache flat"
            posterImg={user1}
            poster="Rashad"
            timeStamp="4 min. ago"
          />
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard
            image="/images/home3.jpg"
            propertyType="residential"
            title="Semi detache flat"
            posterImg={user1}
            poster="Rashad"
            timeStamp="4 min. ago"
          />
        </SwiperSlide>
        <SwiperSlide>
        <ProductCard
            image="/images/home4.jpg"
            propertyType="residential"
            title="Semi detache flat"
            posterImg={user1}
            poster="Rashad"
            timeStamp="4 min. ago"
          />
        </SwiperSlide>
        ...
      </Swiper>
    </SectionWrapper>
  )
}

export default Recommendations
