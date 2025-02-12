import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Grommet,
    Header, Menu,
    Page,
    PageContent,
    PageHeader,
    Text,
    Nav,
    Anchor, Image, Avatar, Box, Card, CardHeader, CardBody, Carousel, Grid,
} from "grommet";
import {Moon, Sun, Home, Beacon, PieChart} from "grommet-icons";
import Canvas from "./conway";
import GasLatticeCanvas from "./gas_lattice";
import ConwayCanvas from "./conway";
import Gas_lattice_no_interactions from "./gas_lattice_no_interactions";
import GasLatticeCanvasDense from "./gas_lattice_dense";
import {CardFooter} from "grommet/es6";
import HomeCarousel from "./HomeCarousel";
import UncontrolledExample from "./HomeCarousel";


const theme = {
  global: {
      colors: {
          primary: '#D3D3D3',
      },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
    gas_lattice: {
      alignSelf: "center",
    }
};

const AppBar = (props) => (
    <Header
      background="primary"
      pad={{ left: "small", right: "small", vertical: "none" }}
      elevation="medium"
      {...props}
     />
);



const App = () => {
    const [dark, setDark] = useState(false);
  return (
      <Grommet theme={theme}>
        <Page>
            <div id={"root"} align={"center"}>
                <div align={"center"}>
                    <Card pad={"small"} direction={"column"} background={'#D3D3D3'}>
                    <Image
                        alt={"Kyle"}
                        src={"kyle15.png"}
                        width={window.innerWidth / 10}
                        align={"center"}
                        alignSelf={"center"}
                        border={"none"}
                    />
                        <CardBody direction={"column"}>
                            <Text size={"large"}>Kyle Bomeisl</Text>
                            <Text size={"small"}>Computational and theoretical physics and software development</Text>
                        </CardBody>
                    </Card>
                </div>
            <Header margin='none'>
            </Header>
            <PageContent alignContent={"center"}>
                <HomeCarousel position={"relative"} alignContent={"center"}/>
            </PageContent>
            </div>
        </Page>
      </Grommet>
  );
}

export default App;
