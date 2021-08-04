import React from "react";
import classes from "./SideBar.module.css"
import SideBarItem from "./item/SideBarItem";
const SideBar = () => {
    return (
        <div className={classes.sideBar}>
            <SideBarItem/>
        </div>
    );
}

export default SideBar;