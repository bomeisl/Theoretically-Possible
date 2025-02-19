import NavAppBar from "./NavAppBar";
import {Header, Page, PageContent, Text, Image, Card} from "grommet";
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
                                <Row alignItems={"center"}>
                                    <Row>
                                        <Col sm={18} align={"center"}>
                                        <Image align={"center"} src={require("./mastering_physics.jpeg")} width="10%"></Image>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Text textAlign={'center'} size={'xlarge'}>Master Quantum Computing</Text>
                                    </Row>
                                    <Row>
                                        <Text textAlign={'center'} color={"#44617b"}>
                                            "Nature isn't classical, dammit, and if you want to make a simulation of nature,
                                            you'd better make it quantum mechanical" - Richard Feynman
                                        </Text>
                                    </Row>
                                </Row>
                            </Container>
                        </Header>
                    </AppBar>
                    <NavAppBar theme={theme}></NavAppBar>
                    <PageContent>
                        <Container fluid={true}>
                            <Row alignItems={"center"}>
                                <Card pad={"medium"}>
                                    <Text textAlign={"center"}>{title}</Text>
                                </Card>
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

