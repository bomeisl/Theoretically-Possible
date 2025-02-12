import {Card, CardBody, CardHeader, Image, Text} from "grommet";
import GasLatticeCanvas from "./gas_lattice";
import Gas_lattice_no_interactions from "./gas_lattice_no_interactions";
import GasLatticeCanvasDense from "./gas_lattice_dense";
import React from "react";

const GasLatticeCard = () => {
  return(
      <Card
          direction="column"
          alignContent={"center"}
          position={"relative"}
          alignSelf={"center"}
          pad={"none"}
          width={"100%"}>
          <CardHeader alignContent={"center"} alignSelf={"center"} direction={"row"}>
              <Text size='medium' alignSelf={'center'} >JS Implementation of Modified Lattice Gas FHP Model</Text>
              <a href={"https://github.com/bomeisl/Theoretically-Possible/blob/main/src/gas_lattice.js"}>
                  <Image src={"github_logo.svg"} width={window.innerWidth/30}></Image>
              </a>
              <a href={"https://github.com/bomeisl/Theoretically-Possible/blob/main/src/gas_lattice.js"}>
                  <Text size='small' alignSelf={'center'}>See the Code on Github</Text>
              </a>
          </CardHeader>
          <CardBody direction={"row"} pad={"xsmall"} position={"relative"} alignContent={"start"}>
              <div id={"gas_lattice"} align={"center"}>
                  <GasLatticeCanvas></GasLatticeCanvas>
                  <Text alignSelf={"center"}>Density = 0.1D</Text>
              </div>
              <div id={"gas_lattice_no_interactions"} align={"center"}>
                  <Gas_lattice_no_interactions></Gas_lattice_no_interactions>
                  <Text alignSelf={"center"}>Density = 0.2D</Text>
              </div>
              <div id={"gas_lattice_no_interactions"} align={"center"}>
                  <GasLatticeCanvasDense></GasLatticeCanvasDense>
                  <Text alignSelf={"center"}>Density = 0.4D</Text>
              </div>
          </CardBody>
      </Card>
  )
}
export default GasLatticeCard;