import React, { useState } from "react";
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
import {username} from "./env_var";


const theme = {
  global: {
      colors: {
          primary: '#616286',
      },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
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
            <AppBar

            >
                <Card
                    direction="column"
                    pad="small"
                    background="white"
                    spacing={9}
                    shadow="none"
                    round="none"
                >
                    <Avatar
                        alignSelf="center"
                        size="large"
                        background={"light-1"}
                        src={`https://gravatar.com/${username}.card`}
                    />
                        <CardHeader>
                            <Text
                                color="text"
                                alignSelf="center"
                            >
                                Kyle Bomeisl
                            </Text>
                        </CardHeader>

                    <CardBody>
                        <Text
                            color="text-weak"
                            size="xsmall"
                            alignSelf="center"
                        >
                        </Text>
                    </CardBody>


                </Card>
                <Text size='large'>Theoretically Possible</Text>
            </AppBar>
            <Header margin='none'>
                <Box height="medium" width="medium" overflow="hidden" gridArea="carousel" margin='none'>
                    <Carousel
                        margin="xsmall"
                        alignSelf="center"
                        play='4000'
                        size="xxlarge"
                        controls={false}
                    >
                        <Image fit="cover" src="https://live.staticflickr.com/65535/53704138164_dfb760dcb1.jpg" />
                        <Image fit="cover" src="https://live.staticflickr.com/65535/53704102948_75dea2a52e_o.jpg" />
                        <Image fit="cover" src="https://live.staticflickr.com/65535/53704325725_a3313d18c7_o.jpg" />
                        <Image fit="cover" src="https://live.staticflickr.com/65535/53704293015_459742f75b_z.jpg" />
                        <Image fit="cover" src="https://live.staticflickr.com/65535/53704035228_7085b31f9b.jpg" />
                        <Image fit="cover" src="https://live.staticflickr.com/65535/53703874431_de63cb1a24_k.jpg" />
                    </Carousel>
                </Box>
                <Nav direction="row" background="primary" pad="medium">
                    <Anchor icon={<Home />} hoverIndicator />
                    <Anchor icon={<Beacon />} hoverIndicator />
                    <Anchor icon={<PieChart />} hoverIndicator />
                </Nav>
            </Header>
            <PageContent>

            </PageContent>
        </Page>
      </Grommet>
  );
}

export default App;
