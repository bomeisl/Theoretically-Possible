import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import {Link} from "react-router-dom";
import React from "react";
import { Menu as MenuIcon} from 'grommet-icons' ;

const HamburgerMenu = () => {
    return (
        <Menu menuButton={
            <MenuButton>
                <MenuIcon color={"black"}/>
            </MenuButton>
        } transition>
            <MenuItem>
                <Link to="/" style={{ color: '#080E4B', textDecoration: 'none'}}>Home</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/quantum_computing" style={{ color: '#080E4B', textDecoration: 'none'}}>Quantum Computing</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/condensed_matter" style={{ color: '#080E4B', textDecoration: 'none'}}>Condensed Matter Physics</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/cellular_automata" style={{ color: '#080E4B', textDecoration: 'none'}}>Cellular Automata</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/android" style={{ color: '#080E4B', textDecoration: 'none'}}>Android Development</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/blog" style={{ color: '#080E4B', textDecoration: 'none'}}>Blog</Link>
            </MenuItem>
        </Menu>
    );
}
export default HamburgerMenu;
