import React, {createRef, useState} from "react";
import style from "./Task.module.css";
import addItem from "../../../../img/add.png";
import deleteItem from "../../../../img/delete.png";
import acceptUserIcon from "../../../../img/accept.png";
import axios from "axios";

const Task = (props) => {
    //addTask state
    const [addTask, setAddTask] = useState("");
    //ref addTaskTemplate
    let refInputTaskTitle = createRef();
    let refInputTaskDesc = createRef();

    let addTaskTemplate = () => {
        if (addTask === "") {
            setAddTask(
                <div>
                    <form className={style.task + " " + style.addTaskRow} action={"#"} method="post">
                        <div className={style.field + " " + style.fieldId}>#</div>
                        <div className={style.field}><input type="text" ref={refInputTaskTitle}/></div>
                        <div className={style.field}><input type="text" ref={refInputTaskDesc}/></div>
                        <div className={style.field + " " + style.fieldCommand}><img src={acceptUserIcon} alt="accept"
                                                                                     onClick={addTaskCommand}/>
                        </div>
                    </form>
                </div>
            )
        } else {
            setAddTask("");
        }
    }

    let addTaskCommand = () => {

        let task = {
            id: "", taskTitle: refInputTaskTitle.current.value, taskDesc: refInputTaskDesc.current.value, tasks: []
        }
        axios.post("http://localhost:8080/api/tasks", task);
        setAddTask("");
    }


    if (props.taskHeader === "yes") {
        let tempVar;
        tempVar = style.task + " " + style.taskHeader;
        return (
            <div>
                <div className={tempVar}>
                    <div className={style.field + " " + style.fieldId}>{props.taskId}</div>
                    <div className={style.field}>{props.taskTitle}</div>
                    <div className={style.field}>{props.taskDesc}</div>
                    <div className={style.field + " " + style.fieldCommand}><img src={addItem} alt={"add"}
                                                                                 onClick={addTaskTemplate}/>
                    </div>
                </div>
                <div>
                    {addTask}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={style.task}>
                <div className={style.field + " " + style.fieldId}>{props.taskId}</div>
                <div className={style.field}>{props.taskTitle}</div>
                <div className={style.field}>{props.taskDesc}</div>
                <div className={style.field + " " + style.fieldCommand}><img src={deleteItem} alt="del"/></div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Task;