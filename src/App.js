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
                    pad="none"
                    background="white"
                    spacing={9}
                    shadow="none"
                    round="none"
                >
                    <iframe
                        alignSelf="center"
                        width={430}
                        height={200}
                        background={"light-1"}
                        src={"https://gravatar.com/8f65f7025001160d578dbf90e43f1998dfe23f35dc56fa6e33d0a967c5ae53ea.card"}
                    />
                </Card>
                <Text size='large'>Theoretically Possible</Text>
            </AppBar>
            <Header margin='none'>
                <Box height="medium" width="medium" overflow="hidden" gridArea="carousel" margin='none'>
                    
                </Box>

            </Header>
            <PageContent>

            </PageContent>
        </Page>
      </Grommet>
  );
}

export default App;
