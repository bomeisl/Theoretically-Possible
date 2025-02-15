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
import HomeCarousel from "./HomeCarousel";
import {Col, Container, Row} from "react-bootstrap";


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
            <Header margin='none'>
                    <AppBar
                        background={'#ECECEC'}
                        margins={'medium'}
                        alignContent={"center"}
                        pad={"small"}
                        direction={'row'}
                        spacing={'100px'}
                        shadow={'md'}
                    >
                        <Container fluid={true}>
                            <Row>
                        <Col alignSelf={"center"} alignItems={"center"}>
                            <span
                                style={{
                                display: 'block',
                                width: 200,
                                minWidth: 100,
                                height: 200,
                                minHeight: 100,
                            }}>
                            </span>
                            <a href={"https://github.com/bomeisl"}>
                                <Image width={window.innerWidth/30} src={"github_logo.svg"}/>
                            </a>
                        </Col>
                        <Col align={"center"} position={"relative"}>
                            <span
                                style={{
                                    display: 'block',
                                    width: 200,
                                    minWidth: 100,
                                    height: 200,
                                    minHeight: 100,
                                }}>
                            </span>
                            <Row>
                                <a href={"https://www.youtube.com/channel/UCn8_5fKGG6ElBN8_RcU5tcA"}>
                                    <Image width={window.innerWidth/30} src={"youtube.svg"}/>
                                </a>
                            </Row>
                        </Col>
                        <Col alignSelf="center" position={"relative"}>
                        <Card direction={"column"} position={"relative"} pad={"small"}>
                            <Image
                                alt={"Kyle"}
                                src={"kyle15.png"}
                                width={window.innerWidth/10}
                                align={"center"}
                                alignSelf={"center"}
                                border={"none"}
                            />
                        </Card>
                        </Col>
                        <Col align={"center"}  position={"relative"}>
                            <span
                                style={{
                                    display: 'block',
                                    width: 200,
                                    minWidth: 100,
                                    height: 220,
                                    minHeight: 100,
                                }}>
                            </span>
                            <Row>
                                <a href={"https://medium.com/@bomeisl"}>
                                    <Image width={window.innerWidth/30} src={"medium_logo.png"}/>
                                </a>
                            </Row>
                        </Col>
                        <Col align={"center"} position={"relative"}>
                            <span
                                style={{
                                    display: 'block',
                                    width: 200,
                                    minWidth: 100,
                                    height: 210,
                                    minHeight: 100,
                                }}>
                            </span>
                            <Row align={"center"}>
                                <a href={"https://x.com/bomeisl_kyle"}>
                                    <Image alignSelf={"center"} width={window.innerWidth/30} src={"x_logo.png"}/>
                                </a>
                            </Row>
                        </Col>
                            </Row>
                    <Row align={"center"}>
                        <Text size={"xlarge"} alignSelf={"center"}>Kyle Bomeisl</Text>
                        <Text>
                            Interested in computational physics, theoretical condensed matter physics and software development.
                            My degree is in Mathematical Physics and I worked as a researcher for the Pixley Theoretical Condensed
                            Matter Physics Group for three years. I also worked for Ameriprise Financial as a software engineer for
                            8 months.
                        </Text>
                        <Text size={"small"}>

                        </Text>
                    </Row>
                    <Row>
                        <AppBar color={'#104e8d'} background={'#104e8d'} direction={'row'} shadow={'small'}>
                            <Text>Quantum Computing</Text>
                            <Text>Cellular Automata</Text>
                            <Text>Condensed Matter Physics</Text>
                            <Text>Android Development</Text>
                            <Text>Blog</Text>
                        </AppBar>
                    </Row>
                </Container>
                </AppBar>
            </Header>
            <PageContent alignContent={"center"}>
                <HomeCarousel position={"relative"} alignContent={"center"}/>
            </PageContent>
        </Page>
      </Grommet>
  );
}

export default App;
