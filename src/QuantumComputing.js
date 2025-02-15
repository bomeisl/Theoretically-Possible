import NavAppBar from "./NavAppBar";
import {Grommet, Header, Page, PageHeader, Text} from "grommet";
import {Col, Container, Row} from "react-bootstrap";
import AppBar from "./AppBar";

const QuantumComputing = (theme) => {
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
                            <Text textAlign={'center'}>Quantum Computing</Text>
                        </Row>
                        <Row>
                            <Text textAlign={'center'}>Quantum Computing
                                "Nature isn't classical, dammit, and if you want to make a simulation of nature,
                                you'd better make it quantum mechanical" - Richard Feynman
                            </Text>
                        </Row>
                        </Col>
                    </Header>
                </AppBar>
            <NavAppBar theme={theme}></NavAppBar>
            </div>
            </Container>
        </Page>
    );
};

export default QuantumComputing;