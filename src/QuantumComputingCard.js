import {Card, CardBody, CardHeader, Image, Text} from "grommet";
import React from "react";

const QuantumComputingCard = () => {
    return(
        <Card
            direction="column"
            alignContent={"center"}
            position={"relative"}
            alignSelf={"center"}
            pad={"none"}
            width={"100%"}>
            <CardHeader alignContent={"center"} alignSelf={"center"} direction={"row"}>
                <Text size='medium' alignSelf={'center'} >Implementation of the Deutsch Algorithm in Qiskit and My Series of Lectures on Quantum Computing</Text>
                <a href={"https://github.com/bomeisl/DeutschAlgorithm"}>
                    <Image src={"github_logo.svg"} width={window.innerWidth/30}></Image>
                </a>
                <a href={"https://github.com/bomeisl/DeutschAlgorithm"}>
                    <Text size='small' alignSelf={'center'}>See the Code on Github</Text>
                </a>
                <a href={"https://www.youtube.com/playlist?list=PLesPSKSjXd6PhRqfm3WCneSiAVKVK_KJ1"}>
                    <Image src={"youtube.svg"} width={window.innerWidth/30}></Image>
                </a>
                <a href={"https://www.youtube.com/playlist?list=PLesPSKSjXd6PhRqfm3WCneSiAVKVK_KJ1"}>
                    <Text size='small' alignSelf={'center'}>Watch the Lectures on Youtube</Text>
                </a>
            </CardHeader>
            <CardBody direction={"row"} pad={"xsmall"} position={"relative"} alignContent={"start"}>
                <div id={"gas_lattice"} align={"center"}>
                   <Image src={"qiskit.png"} width={window.innerWidth/2}/>
                </div>
                <div id={"gas_lattice_no_interactions"} align={"center"}>
                    <Image src={"qiskit2.png"} width={window.innerWidth/2}/>
                </div>
            </CardBody>
        </Card>
    )
}
export default QuantumComputingCard;