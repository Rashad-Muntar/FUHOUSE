import Headings from "../../shared/headings"
import SectionWrapper from "../../shared/sectionWrapper"
import ProductCard from "../shared/ProductCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Recommendations = () => {
    return (
        <SectionWrapper>
            <Headings title="Our recommendations" />
            <Carousel>
            <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </SectionWrapper>
    )
}

export default Recommendations