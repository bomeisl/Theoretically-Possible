import {Link} from "react-router-dom";
import React from "react";
import AppBar from "./AppBar";
import HamburgerMenu from "./Menu";
import {Grommet} from "grommet";

const NavAppBar = (theme) => {
    return(
        <AppBar color={'#104e8d'} background={'#080E4B'} direction={'row'} shadow={'small'}>
            <HamburgerMenu></HamburgerMenu>
            <Link to="/mastering_physics" style={{ color: 'white', textDecoration: 'none'}}>Mastering Physics Courses</Link>
            <Link to="/mastering_physics" style={{ color: 'white', textDecoration: 'none'}}>Computational Fluid Dynamics</Link>
            <Link to="/mastering_physics" style={{ color: 'white', textDecoration: 'none'}}>Condensed Matter Physics</Link>
            <Link to="/mastering_physics" style={{ color: 'white', textDecoration: 'none'}}>Cellular Automata</Link>
            <Link to="/mastering_physics" style={{ color: 'white', textDecoration: 'none'}}>Android Development</Link>
        </AppBar>
    );
}

export default NavAppBar;