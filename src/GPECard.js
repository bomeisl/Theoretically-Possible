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
                <Text size='medium' alignSelf={'center'} >A Library Built for Numerically Solving the Gross-Pitaevskii equation. Written in Julia.</Text>
                <a href={"https://github.com/Pixley-Group/GPE-"}>
                    <Image src={"github_logo.svg"} width={window.innerWidth/30}></Image>
                </a>
                <a href={"https://github.com/Pixley-Group/GPE-"}>
                    <Text size='small' alignSelf={'center'}>See the Code on Github</Text>
                </a>
            </CardHeader>
            <CardBody direction={"row"} pad={"xsmall"} position={"relative"} alignContent={"start"}>
                <div id={"gas_lattice"} align={"center"}>
                   <Image src={"SE_sin(x)_fps10.gif"}/>
                </div>
                <div id={"gas_lattice_no_interactions"} align={"center"}>
                    <Image src={"TFA_sin(x)_fps10.gif"}/>
                </div>
            </CardBody>
        </Card>
    )
}
export default GasLatticeCard;