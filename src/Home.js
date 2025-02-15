import AppBar from "./AppBar";
import {Col, Container, Row} from "react-bootstrap";
import {Card, CardBody, Image, Page, PageContent, Text} from "grommet";
import NavAppBar from "./NavAppBar";
import HomeCarousel from "./HomeCarousel";
import React from "react";

const HomePage = (theme) => {
    return(
        <Page>
            <Container fluid={true}>
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
                        <Text alignSelf={'center'} textAlign={'center'} color={'#080E4B'} pad={'small'} size={'xlarge'}>
                            Theoretically Possible
                        </Text>
                    </Row>
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
                            <Card background={'white'}>
                                <Image
                                    alt={"Kyle"}
                                    src={"Kyle.png"}
                                    width={window.innerWidth/7}
                                    align={"center"}
                                    alignSelf={"center"}
                                    border={"none"}
                                    shape={"oval"}
                                />
                                <CardBody>
                            <Text size={"large"} alignSelf={"center"} color={'black'} pad={'small'}>
                                Kyle Bomeisl
                            </Text>
                                </CardBody>
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
                        <Text>
                            Interested in computational physics, theoretical condensed matter physics and software development.
                            My degree is in Mathematical Physics and I worked as a researcher for the Pixley Theoretical Condensed
                            Matter Physics Group and as a software engineer for Ameriprise Financial.
                        </Text>
                        <Text size={"small"}>
                        </Text>
                    </Row>
                </Container>
            </AppBar>
            <Row>
                <NavAppBar theme={theme} pad={'small'}></NavAppBar>
            </Row>
        </Container>

            <PageContent alignContent={"center"}>
                <HomeCarousel position={"relative"} alignContent={"center"}/>
            </PageContent>
        </Page>
    );
};

export default HomePage;