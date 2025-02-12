import Carousel from 'react-bootstrap/Carousel';
import GasLatticeCard from "./GasLatticeCard";
import {Image} from "grommet";
import GukuraCard from "./GukuraCard";
import GPECard from "./GPECard";


function HomeCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <GasLatticeCard/>
            </Carousel.Item>
            <Carousel.Item>
                <GukuraCard/>
            </Carousel.Item>
            <Carousel.Item>
                <GPECard/>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;