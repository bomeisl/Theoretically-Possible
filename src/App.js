import React, { useState, useRef } from "react";
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
import Canvas from "./conway";
import GasLatticeCanvas from "./gas_lattice";
import ConwayCanvas from "./conway";


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
            <AppBar>
                <Card
                    direction="column"
                    pad="none"
                    background="white"
                    spacing={9}
                    shadow="none"
                    round="none"
                >
                </Card>
                <Text size='large'>Theoretically Possible</Text>
            </AppBar>
            <Header margin='none'>
                <Box height="medium" width="medium" overflow="hidden" gridArea="carousel" margin='none'>
                    
                </Box>

            </Header>
            <PageContent>
                <GasLatticeCanvas></GasLatticeCanvas>
            </PageContent>
        </Page>
      </Grommet>
  );
}

export default App;
