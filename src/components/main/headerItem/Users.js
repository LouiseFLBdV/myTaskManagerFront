import React, {createRef, useState} from "react"
import style from "./Users.module.css";
import TaskComponent from "./task/Task";
import addUserIcon from "../../../img/add.png";
import deleteUserIcon from "../../../img/delete.png";
import acceptUserIcon from "../../../img/accept.png"

const Users = (props) => {

    //select user state
    const [tasks, setTasks] = useState("");
    const [taskHeader, setTaskHeader] = useState("");
    const [isUserSelected, setUserSelect] = useState(false);
    const [styleActive, setStyleActive] = useState("")
    const [styleTaskContent, setStyleTaskContent] = useState("");

    //update state
    const [isUpdateUserName, setUpdateUserName] = useState(false);
    const [userNameField, setUserNameField] = useState(props.userName)
    const [isUpdateFirstName, setUpdateFirstName] = useState(false);
    const [firstNameField, setFirstNameField] = useState(props.firstName)
    const [isUpdateLastName, setUpdateLastName] = useState(false);
    const [lastNameField, setLastNameField] = useState(props.lastName)

    //ref addUserTemplate
    let refInputUserName = createRef();
    let refInputFirstName = createRef();
    let refInputLastName = createRef();

    //add User state
    const [addUser, setAddUser] = useState();

    let selectUser = () => {
        if (isUserSelected) {
            setTasks(<div></div>)
            setTaskHeader(<div></div>)
            setStyleActive("");
            setStyleTaskContent("")
            setUserSelect(false);
        } else {
            setUserSelect(true);
            setStyleActive(style.active)
            setStyleTaskContent(style.taskContent);
            tasksRender();
        }
    }

    let updateUserName = () => {
        if (isUpdateUserName) {
            setUpdateUserName(false)
            setUserNameField(props.userName)
        } else {
            setUpdateUserName(true)
            setUserNameField(
                <div className={style.updateInput}>
                    <input type="text"/>
                    <img src={acceptUserIcon} alt="accept"/>
                </div>
            )
        }
    }
    let updateFirstName = () => {
        if (isUpdateFirstName) {
            setUpdateFirstName(false)
            setFirstNameField(props.firstName)
        } else {
            setUpdateFirstName(true)
            setFirstNameField(
                <div className={style.updateInput}>
                    <input type="text"/>
                    <img src={acceptUserIcon} alt="accept"/>
                </div>
            )
        }
    }
    let updateLastName = () => {
        if (isUpdateLastName) {
            setUpdateLastName(false)
            setLastNameField(props.lastName)
        } else {
            setUpdateLastName(true)
            setLastNameField(
                <div className={style.updateInput}>
                    <input type="text"/>
                    <img src={acceptUserIcon} alt="accept"/>
                </div>
            )
        }
    }

    let tasksRender = () => {
        let taskComponent = props.tasks.map(task => {
            return <TaskComponent taskId={task.taskId} taskTitle={task.taskTitle} taskDesc={task.taskDescription}/>
        })
        setTaskHeader(<TaskComponent taskId={"id"} taskTitle={"taskTitle"} taskDesc={"taskDesc"} taskHeader={"yes"}/>);
        setTasks(taskComponent);
    }

    let addUserTemplate = () => {
        if (addUser === "") {
            setAddUser(
                <div>
                    <form className={style.user + " " + style.addUserRow} action={"#"} method="post">
                        <div className={style.field + " " + style.fieldId}>#</div>
                        <div className={style.field}><input type="text" ref={refInputUserName}/></div>
                        <div className={style.field}><input type="text" ref={refInputFirstName}/></div>
                        <div className={style.field}><input type="text" ref={refInputLastName}/></div>
                        <div className={style.field + " " + style.fieldTask}>#</div>
                        <div className={style.field + " " + style.fieldCommand}><img src={acceptUserIcon} alt="accept" onClick={addUserCommand}/>
                        </div>
                    </form>
                </div>
            )
        } else {
            setAddUser("");
        }
    }

    let addUserCommand = () => {

        let user = {
            id: "#", userName: refInputUserName.current.value, firstName: refInputFirstName.current.value, lastName: refInputLastName.current.value, tasks: []
        }
        props.addUser(user);

        setAddUser("");
    }

    if (props.header === "yes") {
        let tempVar;
        tempVar = style.user + " " + style.userHeader;
        return (
            <div>
                <div className={tempVar}>
                    <div className={style.field + " " + style.fieldId}>{props.id}</div>
                    <div className={style.field}>{props.userName}</div>
                    <div className={style.field}>{props.firstName}</div>
                    <div className={style.field}>{props.lastName}</div>
                    <div className={style.field}>{props.tasks}</div>
                    <div className={style.field + " " + style.fieldCommand}><img src={addUserIcon} alt={"add"} onClick={addUserTemplate}/></div>
                </div>
                <div>
                    {addUser}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={style.user + " " + styleActive}>
                <div className={style.field + " " + style.fieldId}>{props.id}</div>
                <div className={style.field} onDoubleClick={updateUserName}>{userNameField}</div>
                <div className={style.field} onDoubleClick={updateFirstName}>{firstNameField}</div>
                <div className={style.field} onDoubleClick={updateLastName}>{lastNameField}</div>
                <div className={style.field + " " + style.fieldTask}
                     onDoubleClick={selectUser}>{props.tasks.length}</div>
                <div className={style.field + " " + style.fieldCommand}><img src={deleteUserIcon} alt="del"/></div>
            </div>
            <div className={styleTaskContent}>
                <div className={style.temp}>{taskHeader}{tasks}</div>
            </div>
        </div>
    )
}

export default Users;