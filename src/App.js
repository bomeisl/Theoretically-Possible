import React, { useState } from "react";
import {
    Button,
    Grommet,
    Header,
    Page,
    PageContent,
    PageHeader,
    Text,
    Nav,
    Anchor, Image, Avatar, Box, Card, CardHeader, CardBody, Carousel, Grid, CardFooter,
} from "grommet";
import {Moon, Sun, Home, Beacon, PieChart, Menu} from "grommet-icons";


const theme = {
  global: {
      colors: {
          primary: '#616286',
          darkNavy: '#0e1b29',
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
      background="darkNavy"
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
            <PageContent>
            <AppBar

                pad={{ left: "small", right: "small", vertical: "xxsmall" }}
            >
                <Box
                    direction="column"
                    pad="small"

                >
                    <Avatar
                        alignSelf="center"
                        size="large"
                        background={"white"}
                        src={"https://gravatar.com/avatar/8f65f7025001160d578dbf90e43f1998dfe23f35dc56fa6e33d0a967c5ae53ea"}
                    />

                        <CardHeader alignSelf='center'>
                            <Text
                                color='white'
                                alignSelf="center"
                                size='large'
                            >
                                Kyle Bomeisl
                            </Text>
                        </CardHeader>

                    <CardBody alignSelf='center'>

                        <Text
                            color="white"
                            size="xsmall"
                            alignSelf='center'
                        >
                            Software Engineer (Ameriprise Financial)
                        </Text>
                        <Text
                            color="white"
                            size="xsmall"
                            alignSelf='center'
                        >
                            Theoretical Condensed Matter Physics Researcher (Pixley Group)
                        </Text>
                    </CardBody>

                </Box>
                <Box direction='column' pad={{ left: "small", right: "small", vertical: "xxsmall" }}>
                    <Text size='large' alignSelf='center'>Theoretically Possible</Text>
                    <Text alignSelf='center'>A freemium series of physics and software engineering courses</Text>
                </Box>
                <Text size='medium'>Expertise is a Terrible Thing to Waste</Text>
            </AppBar>
            <Header margin='none' direction='row'>
                <Box height="medium" width="xxlarge" overflow="hidden" margin='xxsmall' alignContent='center'>
                    <Carousel
                        margin="xsmall"
                        alignSelf="center"
                        play='4000'
                        height='medium'
                        width='large'
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
            </Header>
                
            </PageContent>
        </Page>
      </Grommet>
  );
}

export default App;
