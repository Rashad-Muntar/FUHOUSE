import { useState } from "react";
import Image from "next/image";
import Headings from "../../shared/headings"
import "../../../styles/carousel.css"
import SectionWrapper from "../../shared/sectionWrapper"
import ProductCard from "../shared/ProductCard";
import accra from "../../../public/images/accra.jpg"
import kumasi from "../../../public/images/kumasi.jpg"
import takoradi from "../../../public/images/takoradi.jpg"
import Carousel from 'react-bootstrap/Carousel';
import sunyani from "../../../public/images/sunyani.jpg"

const Recommendations = () => {
    
    return (
     
       <SectionWrapper>
            <Headings title="Our recommendations" />
            <Carousel>
      <Carousel.Item bsPrefix="carousel-item" classname="carousel-item">
        <img
          className="d-block w-100"
          src="/images/kumasi.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/accra.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="flex justify-between">
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

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
        </SectionWrapper>
    )
}

export default Recommendations