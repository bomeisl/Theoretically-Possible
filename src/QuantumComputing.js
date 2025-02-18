import NavAppBar from "./NavAppBar";
import {Card, CardBody, CardHeader, Grommet, Header, Image, Page, PageContent, PageHeader, Text} from "grommet";
import {Col, Container, Row} from "react-bootstrap";
import AppBar from "./AppBar";
import VideoFrame from "./VideoFrame";
import {Link} from "react-router-dom";
import React from "react";

const QuantumComputing = ({theme}) => {
    return(
        <Page>
            <Container fluid={true}>
            <div>
                <AppBar
                    background={'#ECECEC'}
                    margins={'medium'}
                    alignContent={"center"}
                    pad={"small"}
                    direction={'row'}
                    spacing={'100px'}
                    shadow={'md'}
                >
                    <Header>
                        <Container fluid={true}>
                        <Col>
                        <Row align={"start"}>
                            <Col>
                            <Image src={"mastering_physics.jpeg"} height={window.innerHeight/7}></Image>
                            </Col>
                            <Col>
                            <Text textAlign={'center'} size={'xlarge'}>Master Quantum Computing</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Text textAlign={'center'} color={"#44617b"}>
                                "Nature isn't classical, dammit, and if you want to make a simulation of nature,
                                you'd better make it quantum mechanical" - Richard Feynman
                            </Text>
                        </Row>
                        </Col>
                        </Container>
                    </Header>
                </AppBar>
            <NavAppBar theme={theme}></NavAppBar>
                <PageContent alignContent={'center'}>
                   <Text>Course Syllabus</Text>
                    <Link to="/quantum_computing/1" style={{ color: '#080E4B', textDecoration: 'none'}}>I. State and Information</Link>
                    <Link to="/quantum_computing/2" style={{ color: '#080E4B', textDecoration: 'none'}}>II. Classical Computing</Link>
                    <Link to="/quantum_computing/3" style={{ color: '#080E4B', textDecoration: 'none'}}>III. An Introduction to Quantum Mechanics Pt. 1</Link>
                    <Link to="/quantum_computing/4" style={{ color: '#080E4B', textDecoration: 'none'}}>IV. An Introduction to Quantum Mechanics Pt. 2</Link>
                    <Link to="/quantum_computing/5" style={{ color: '#080E4B', textDecoration: 'none'}}>V. Single Qubits</Link>
                    <Link to="/quantum_computing/6" style={{ color: '#808080', textDecoration: 'none'}}>VI. Multiple Qubits</Link>
                </PageContent>
                </div>
            </Container>
        </Page>
    );
};

export default QuantumComputing;

