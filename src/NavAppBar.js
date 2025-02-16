import {Link} from "react-router-dom";
import React from "react";
import AppBar from "./AppBar";
import HamburgerMenu from "./Menu";
import {Grommet} from "grommet";

const NavAppBar = (theme) => {
    return(
        <AppBar color={'#104e8d'} background={'#080E4B'} direction={'row'} shadow={'small'}>
            <HamburgerMenu></HamburgerMenu>
        </AppBar>
    );
}

export default NavAppBar;