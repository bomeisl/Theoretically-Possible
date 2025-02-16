import NavAppBar from "./NavAppBar";
import {Header, Page, PageContent, Text,Image} from "grommet";
import {Col, Container, Row} from "react-bootstrap";
import AppBar from "./AppBar";
import VideoFrame from "./VideoFrame";
import NotesIFrame from "./NotesIFrame";
import React from "react";

const LessonPage = ({theme, url, uri, title}) => {
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
                    <PageContent>
                        <Container fluid={true}>
                            <Row>
                                <Text>{title}</Text>
                            </Row>
                            <Row>
                                <VideoFrame url={url}></VideoFrame>
                            </Row>
                            <Row>
                                <NotesIFrame uri={uri} title={"Lecture 2 Notes"}></NotesIFrame>
                            </Row>
                        </Container>
                    </PageContent>
                </div>
            </Container>
        </Page>
    );
};

export default LessonPage;

