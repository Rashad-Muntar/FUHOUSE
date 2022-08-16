import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import Headings from '../../shared/headings'
import SectionWrapper from '../../shared/sectionWrapper'
import ProductCard from '../shared/ProductCard'
import accra from '../../../public/images/accra.jpg'
import kumasi from '../../../public/images/kumasi.jpg'
import takoradi from '../../../public/images/takoradi.jpg'
import Carousel from 'react-bootstrap/Carousel'
import sunyani from '../../../public/images/sunyani.jpg'

import 'swiper/css/navigation';


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
          {' '}
          <img
            src="/images/accra.jpg"
            alt="Third slide"
            className="d-block w-[32%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src="/images/kumasi.jpg"
            alt="Third slide"
            className="d-block w-[32%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            className="d-block w-[32%]"
            src="/images/takoradi.jpg"
            alt="Third slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src="/images/kumasi.jpg"
            alt="Third slide"
            className="d-block w-[32%]"
          />
        </SwiperSlide>
        ...
      </Swiper>
      {/* <Carousel onSlide={}>
        <Carousel.Item>
          <div className="d-block w-100">
            <div className="flex justify-between">
              <img
                src="/images/accra.jpg"
                alt="Third slide"
                className="d-block w-[32%]"
              />
              <img
                className="d-block w-[32%]"
                src="/images/accra.jpg"
                alt="Third slide"
              />
              <img
                className="d-block w-[32%]"
                src="/images/accra.jpg"
                alt="Third slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100">
            <div className="flex justify-between">
              <img
                src="/images/kumasi.jpg"
                alt="Third slide"
                className="d-block w-[32%]"
              />
              <img
                className="d-block w-[32%]"
                src="/images/kumasi.jpg"
                alt="Third slide"
              />
              <img
                className="d-block w-[32%]"
                src="/images/kumasi.jpg"
                alt="Third slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="justify-between">
          <div className="d-block w-100">
            <div className="flex justify-between">
              <img
                src="/images/takoradi.jpg"
                alt="Third slide"
                className="d-block w-[32%]"
              />
              <img
                className="d-block w-[32%]"
                src="/images/takoradi.jpg"
                alt="Third slide"
              />
              <img
                className="d-block w-[32%]"
                src="/images/takoradi.jpg"
                alt="Third slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel> */}
    </SectionWrapper>
  )
}

export default Recommendations
