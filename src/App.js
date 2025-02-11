import React, { useState, useRef } from "react";
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
            <AppBar pad={"none"} alignContent={"center"}>
                <div direction={"column"} align={"center"}>

                    <Card
                        spacing={1}
                        pad={"xsmall"}
                        shadow="none"
                        shape={"circle"}
                    >
                        <CardBody>
                            <h1>Kyle Bomeisl</h1>
                            <img
                                alt={"Kyle"}
                                src={"kyle15.png"}
                                width={window.innerWidth / 10}
                                align={"center"}
                                border={"none"}
                            />
                        </CardBody>
                    </Card>
                </div>
                <Text size='large' >Theoretically Possible</Text>
            </AppBar>
            <Header margin='none'>

            </Header>
            <PageContent alignContent={"center"}>
                <Card direction="column" spacing={0} alignContent={"center"}>
                    <CardHeader alignContent={"center"} alignSelf={"center"} direction={"row"}>
                        <Image src={"react-2.svg"} width={window.innerWidth/30}></Image>
                        <Text size='medium' alignSelf={'center'} >ReactJS Implementation of Modified Lattice Gas FHP Model</Text>
                    </CardHeader>
                    <CardBody direction={"row"}>
                    <div id={"gas_lattice"}>
                        <GasLatticeCanvas></GasLatticeCanvas>
                        <h3>Density = 0.1D</h3>
                    </div>
                    <div id={"gas_lattice_no_interactions"}>
                        <Gas_lattice_no_interactions></Gas_lattice_no_interactions>
                        <h3>Density = 0.2D</h3>
                    </div>
                    <div id={"gas_lattice_no_interactions"}>
                        <GasLatticeCanvasDense></GasLatticeCanvasDense>
                        <h3>Density = 0.4D</h3>
                    </div>
                    </CardBody>
                    <CardFooter direction={"row"}>

                    </CardFooter>
                </Card>
            </PageContent>
            </div>
        </Page>
      </Grommet>
  );
}

export default App;
