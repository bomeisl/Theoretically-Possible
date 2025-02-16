import Carousel from 'react-bootstrap/Carousel';
import {Image} from "grommet";


function NotesCarousel1({props}) {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src={"Lec2_notes1.jpg"}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={"Lec2_notes2.jpg"}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={"Lec2_notes3.jpg"}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={"Lec2_notes4.jpg"}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={"Lec2_notes5.jpg"}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={"Lec2_notes6.jpg"}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={"Lec2_notes7.jpg"}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={"Lec2_notes8.jpg"}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={"Lec2_notes9.jpg"}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={"Lec2_notes10.jpg"}/>
            </Carousel.Item>
        </Carousel>
    );
}

export default NotesCarousel1;