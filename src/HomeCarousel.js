import Carousel from 'react-bootstrap/Carousel';
import GasLatticeCard from "./GasLatticeCard";
import {Image} from "grommet";
import GukuraCard from "./GukuraCard";
import GPECard from "./GPECard";
import QuantumComputingCard from "./QuantumComputingCard";


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
            <Carousel.Item>
                <QuantumComputingCard/>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;