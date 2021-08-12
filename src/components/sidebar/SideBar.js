import React from "react";
import style from "./SideBar.module.css"
import SideBarItem from "./item/SideBarItem";
const SideBar = () => {
    return (
        <div className={style.sideBar}>
            <SideBarItem name={"Create User"}/>
            <SideBarItem name={"Add Task"}/>
            <SideBarItem name={"Show Users"}/>
            <SideBarItem name={"Show User Task"}/>
        </div>
    );
}

export default SideBar;