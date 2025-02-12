import {Card, CardBody, CardHeader, Image, Text} from "grommet";
import GasLatticeCanvas from "./gas_lattice";
import Gas_lattice_no_interactions from "./gas_lattice_no_interactions";
import GasLatticeCanvasDense from "./gas_lattice_dense";
import React from "react";

const GukuraCard = () => {
    return(
        <Card
            direction="column"
            alignContent={"center"}
            position={"relative"}
            alignSelf={"center"}
            pad={"none"}
            width={"100%"}>
            <CardHeader alignContent={"center"} alignSelf={"center"} direction={"row"}>
                <Text size='medium' alignSelf={'center'} >An Android Application That Takes a Scientific Approach to Plant Care</Text>
                <a href={"https://github.com/bomeisl/Gukura"}>
                    <Image src={"github_logo.svg"} width={window.innerWidth/30}></Image>
                </a>
                <a href={"https://github.com/bomeisl/Gukura"}>
                    <Text size='small' alignSelf={'center'}>See the Code on Github</Text>
                </a>
            </CardHeader>
            <CardBody direction={"row"} pad={"xsmall"} position={"relative"} alignContent={"start"}>
                <Image src={"gukura.png"}/>
                <Image src={"gukura3.png"} width={window.innerWidth/5}/>
            </CardBody>
        </Card>
    )
}
export default GukuraCard;