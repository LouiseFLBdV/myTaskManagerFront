import React from "react";
import style from "./TaskComponent.module.css";
import addItem from "../../../../img/addItem.png";
import deleteItem from "../../../../img/delete.png";

const Task = (props) =>{
    if (props.taskHeader ==="yes"){
        let tempVar;
        tempVar = style.task + " " + style.taskHeader;
        return (
            <div className={tempVar}>
                <div className={style.taskFieldId}>{props.taskId}</div>
                <div className={style.taskField}>{props.taskTitle}</div>
                <div className={style.taskField}>{props.taskDesc}</div>
                <div className={style.taskFieldCommand}><img src={addItem} alt={"add"}/></div>
            </div>
        )
    }

    return (
        <div className={style.task}>
            <div className={style.taskFieldId}>{props.taskId}</div>
            <div className={style.taskField}>{props.taskTitle}</div>
            <div className={style.taskField}>{props.taskDesc}</div>
            <div className={style.taskFieldCommand}><img src={deleteItem} alt="del"/></div>
        </div>
    )
}

export default Task;