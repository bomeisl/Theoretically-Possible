import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import {
    Grommet,
    Header,
    Page,
    PageContent,
    Text,
    Image, Card
} from "grommet";
import HomeCarousel from "./HomeCarousel";
import {Col, Container, Row} from "react-bootstrap";
import {Book} from "grommet-icons";
import NavAppBar from "./NavAppBar";
import AppBar from "./AppBar";
import QuantumComputing from "./QuantumComputing";
import ThemeProvider from "./ThemeProvider";
import HomePage from "./Home";
import LessonPage from "./LessonPage";

const theme = {
    global: {
        colors: {
            primary: '#D3D3D3',
        },
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px",
        },
    },
    gas_lattice: {
        alignSelf: "center",
    },
    link: {
        textColor: "white"
    }
};


const App = () => {
    const [dark, setDark] = useState(false);
    return (
        <Grommet theme={theme}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route path="/quantum_computing" element={<QuantumComputing/>}/>
                    <Route
                        path="/quantum_computing/1"
                        element={
                            <LessonPage url={"https://www.youtube.com/embed/vN390pcLnKw?si=4mPQkkzZmrdMfRGH"}
                                        uri={""}
                                        title={"Lesson 1: State and Information"}
                            />}/>
                    <Route
                        path="/quantum_computing/2"
                        element={
                            <LessonPage
                                url={"https://www.youtube.com/embed/uXrq3z2q3B0?si=HH-cWZK6KxtN1sbB"}
                                uri={"https://docs.google.com/document/d/1wJ3tH_d2hhw3yFJLdPWrEBKoLqWyGFOk6FntNfWNaEM/edit?usp=sharing"}
                                title={"Lesson 2: An Introduction to Quantum Mechanics Pt. 1"}
                            />}/>
                    <Route
                        path="/quantum_computing/3"
                        element={
                            <LessonPage
                                url={"https://www.youtube.com/embed/Fs7-dr8yrcE?si=16hjZDbCzQvrRCw9"}
                                uri={"https://docs.google.com/document/d/1qwupBhAzlBFkGRei91kHeaXGIdXDQWwmSrNud3eJO_o/edit?usp=sharing"}
                                title={"Lesson 3: An Introduction to Quantum Mechanics Pt. 2"}
                            />}/>
                    <Route
                        path="/quantum_computing/4"
                        element={
                            <LessonPage
                                url={"https://www.youtube.com/embed/QKPUrITdoPY?si=NFnqtx5mU4o0aCJg"}
                                uri={"https://docs.google.com/document/d/1T-bfFnTaFj6QM5SUddMMPF8WMoJCeExOPL_yek_82oU/edit?usp=sharing"}
                                title={"Lesson 4: Single Qubits"}
                            />}/>
                </Routes>
            </Router>
        </Grommet>
    );
}

export default App;