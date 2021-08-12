import React from "react";
import classes from "./SideBarItem.module.css"
const SideBarItem = (props) =>{
    return(
        <div className={classes.item}>
            <div className={classes.itemText}>
                {props.name}
            </div>
        </div>
    )
}

export default SideBarItem;