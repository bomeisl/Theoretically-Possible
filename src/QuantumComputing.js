import NavAppBar from "./NavAppBar";
import {Grommet, Header, Page, PageContent, PageHeader, Text} from "grommet";
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
                        <Col>
                        <Row>
                            <Text textAlign={'center'}>Master Quantum Computing</Text>
                        </Row>
                        <Row>
                            <Text textAlign={'center'} color={"#44617b"}>
                                "Nature isn't classical, dammit, and if you want to make a simulation of nature,
                                you'd better make it quantum mechanical" - Richard Feynman
                            </Text>
                        </Row>
                        </Col>
                    </Header>
                </AppBar>
            <NavAppBar theme={theme}></NavAppBar>
                <PageContent alignContent={'center'}>
                   <Text>Lessons</Text>
                    <Link to="/quantum_computing/1" style={{ color: '#080E4B', textDecoration: 'none'}}>I. State and Information</Link>
                </PageContent>
                </div>
            </Container>
        </Page>
    );
};

export default QuantumComputing;

