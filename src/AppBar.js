import {Header} from "grommet";
import React from "react";

const AppBar = (props) => {
    return(
        <Header
            background='primary'
            pad={{left: "small", right: "small", vertical: "none"}}
            elevation="medium"
            {...props}
        />
    );
};

export default AppBar;