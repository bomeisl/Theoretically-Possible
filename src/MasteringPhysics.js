import {Col, Container, Row} from "react-bootstrap";
import AppBar from "./AppBar";
import {Card, CardBody, CardHeader, Grid, Header, Image, Page, PageContent, Text} from "grommet";
import NavAppBar from "./NavAppBar";
import {Link} from "react-router-dom";
import React from "react";

const MasteringPhysics = ({theme}) => {
    return (
        <Page>
            <Container fluid={true}>
                <div>
                    <AppBar
                        background={'#ECECEC'}
                        margins={'medium'}
                        alignContent={"center"}
                        pad={"small"}
                        direction={'row'}
                        shadow={'md'}
                    >
                            <Container fluid={true}>
                                <Row className="justify-content-md-center">
                                    <Col xs lg="2">
                                        <Image src={"mastering_physics.jpeg"} height={window.innerHeight/4}></Image>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Text textAlign={"center"}>“You ask me if an ordinary person—by studying hard—would
                                        get to be able to imagine these things like I imagine. Of course. I was an ordinary
                                        person who studied hard. There's no miracle people. It just happens they got interested
                                        in this thing, and they learned all this stuff. They're just people. There's no talent
                                        or special miracle ability to understand quantum mechanics or a miracle ability
                                        to imagine electromagnetic fields that comes without practice and reading and learning and study.
                                        So if you take an ordinary person who's willing to devote a great deal of time
                                        and study and work and thinking and mathematics, then he's become a scientist.” </Text>
                                    <Text textAlign={"center"}>-Richard Feynman </Text>
                                </Row>
                            </Container>
                    </AppBar>
                    <NavAppBar theme={theme}></NavAppBar>
                    <PageContent alignContent={'center'}>
                        <Container fluid={true}>
                            <Row className="justify-content-md-center">
                                <Text textAlign={"center"}>Courses</Text>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col xs lg="2">
                                <Card pad={'small'} width={window.innerWidth/3} direction={'row'} alignContent={'center'}>
                                            <Link to="/mastering_physics/quantum_computing" style={{ color: '#080E4B', textDecoration: 'none'}}>
                                                <Container>
                                                <Row>
                                                <Text textAlign={"center"}>Master Quantum Computing</Text>
                                                </Row>
                                                <Row>

                                                <Image src={"qiskit.png"} alignSelf={"center"} width={window.innerWidth/3} height={'auto'} />

                                                </Row>
                                                </Container>
                                            </Link>
                                </Card>
                                </Col>
                            </Row>
                        </Container>

                    </PageContent>
                </div>
            </Container>
        </Page>
    );
}

export default MasteringPhysics;