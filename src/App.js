import React, { useState } from "react";
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
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/quantum_computing" element={<QuantumComputing/>} />
              <Route path="/quantum_computing/1" element={<LessonPage/>} />
          </Routes>
      </Router>
      </Grommet>
  );
}

export default App;
