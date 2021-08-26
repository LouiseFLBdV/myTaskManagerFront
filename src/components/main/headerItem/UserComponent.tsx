import React, {createRef, useState} from "react"
import style from "./UserComponent.module.css";
import TaskComponent from "./task/Task";
import addUserIcon from "../../../img/add.png";
import deleteUserIcon from "../../../img/delete.png";
import acceptUserIcon from "../../../img/accept.png"
import axios from "axios";
import {User} from "../../../redux/User";

const UPDATE_NEW_USER = 'UPDATE-NEW-USER';
const updateNewUserActionCreator = (user:User) => ( {type: UPDATE_NEW_USER, newUser: user})

const UserComponent = (props:any) => {

    //select user state
    const [tasks, setTasks]:any = useState("");
    const [taskHeader, setTaskHeader]:any  = useState("");
    const [isUserSelected, setUserSelect]:any  = useState(false);
    const [styleActive, setStyleActive]:any  = useState("");
    const [styleTaskContent, setStyleTaskContent]:any  = useState("");

    //update state
    const [isUpdateUserName, setUpdateUserName] :any = useState(false);
    const [userNameField, setUserNameField]:any  = useState(props.user.userName)
    const [isUpdateFirstName, setUpdateFirstName]:any  = useState(false);
    const [firstNameField, setFirstNameField]:any  = useState(props.user.firstName)
    const [isUpdateLastName, setUpdateLastName]:any  = useState(false);
    const [lastNameField, setLastNameField] :any = useState(props.user.lastName)

    //ref addUserTemplate
    let refInputUserName:any  = createRef();
    let refInputFirstName :any = createRef();
    let refInputLastName:any  = createRef();

    //add User state
    const [addUser, setAddUser]:any  = useState();

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

    let updateUserNameTemplate = () => {
        if (isUpdateUserName) {
            setUpdateUserName(false)
            setUserNameField(props.user.userName)
        } else {
            setUpdateUserName(true)
            setUserNameField(
                <div className={style.updateInput}>
                    <input type="text" ref={refInputUserName}/>
                    <img src={acceptUserIcon} alt="accept" onClick={updateUserName}/>
                </div>
            )
        }
    }

    let updateUserName = () =>{
        let upUserName = refInputUserName.current.value;
        let user = {
            id: props.user.id,
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            userName: upUserName,
            tasks: props.user.tasks
        }
        axios.put("http://localhost:8080/api/users", user);
        setUpdateUserName(false)
        setUserNameField(upUserName)
    }

    let updateFirstNameTemplate = () => {
        if (isUpdateFirstName) {
            setUpdateFirstName(false)
            // setFirstNameField(props.user.firstName)
        } else {
            setUpdateFirstName(true)
            setFirstNameField(
                <div className={style.updateInput}>
                    <input type="text" ref={refInputFirstName}/>
                    <img src={acceptUserIcon} alt="accept" onClick={updateFirstName}/>
                </div>
            )
        }
    }
    let updateFirstName = () => {
        let upFirstName = refInputFirstName.current.value;
        let user = {
            id: props.user.id,
            firstName: upFirstName,
            lastName: props.user.lastName,
            userName: props.user.userName,
            tasks: props.user.tasks
        }
        axios.put("http://localhost:8080/api/users", user);
        setUpdateFirstName(false)
        setFirstNameField(upFirstName)
    }

    let updateLastNameTemplate = () => {
        if (isUpdateLastName) {
            setUpdateLastName(false)
            setLastNameField(props.user.lastName)
        } else {
            setUpdateLastName(true)
            setLastNameField(
                <div className={style.updateInput}>
                    <input type="text" ref={refInputLastName}/>
                    <img src={acceptUserIcon} alt="accept" onClick={updateLastName}/>
                </div>
            )
        }
    }

    let updateLastName = () =>{
        let upLastName = refInputLastName.current.value;
        let user = {
            id: props.user.id,
            firstName: props.user.firstName,
            lastName: upLastName,
            userName: props.user.userName,
            tasks: props.user.tasks
        }
        axios.put("http://localhost:8080/api/users", user);
        setUpdateLastName(false)
        setLastNameField(upLastName)
    }

    let deleteUser = () => {
        let user = {
            id: props.user.id,
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            userName: props.user.userName,
            tasks: props.user.tasks
        }
        axios.delete("http://localhost:8080/api/users/" + props.user.id);
    }

    let tasksRender = () => {
        let taskComponent = props.user.tasks.map((task:any)  => {
            return <TaskComponent taskId={task.taskId} taskTitle={task.taskTitle} taskDesc={task.taskDescription}/>
        })
        setTaskHeader(<TaskComponent taskId={"id"} taskTitle={"taskTitle"} taskDesc={"taskDesc"} taskHeader={"yes"}/>);
        setTasks(taskComponent);
    }

    let addUserTemplateChangeUserName = () =>{
        let user:User = props.newUser;
        user.userName = refInputUserName.current.value;
        props.dispatch(updateNewUserActionCreator(user));
    }

    let addUserTemplate = () => {
        if (addUser === "") {
            setAddUser(
                <div>
                    <form className={style.user + " " + style.addUserRow} action={"#"} method="post">
                        <div className={style.field + " " + style.fieldId}>#</div>
                        <div className={style.field}><input type="text" ref={refInputUserName} onChange={addUserTemplateChangeUserName} value={props.newUser.userName}/></div>
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
    //todo отдельно
    //todo typescript
    let addUserCommand = () => {

        let user = {
            id: "", userName: refInputUserName.current.value, firstName: refInputFirstName.current.value, lastName: refInputLastName.current.value, tasks: []
        }
        axios.post("http://localhost:8080/api/users", user);
        props.addUser(user);
        setAddUser("");
    }

    if (props.header === "yes") {
        let tempVar;
        tempVar = style.user + " " + style.userHeader;
        return (
            <div>
                <div className={tempVar}>
                    <div className={style.field + " " + style.fieldId}>id</div>
                    <div className={style.field}>User Name</div>
                    <div className={style.field}>First Name</div>
                    <div className={style.field}>Last Name</div>
                    <div className={style.field}>Tasks</div>
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
                <div className={style.field + " " + style.fieldId}>{props.user.id}</div>
                <div className={style.field} onDoubleClick={updateUserNameTemplate}>{userNameField}</div>
                <div className={style.field} onDoubleClick={updateFirstNameTemplate}>{firstNameField}</div>
                <div className={style.field} onDoubleClick={updateLastNameTemplate}>{lastNameField}</div>
                <div className={style.field + " " + style.fieldTask}
                     onDoubleClick={selectUser}>{props.user.tasks.length}</div>
                <div className={style.field + " " + style.fieldCommand}><img src={deleteUserIcon} alt="del" onClick={deleteUser}/></div>
            </div>
            <div className={styleTaskContent}>
                <div className={style.temp}>{taskHeader}{tasks}</div>
            </div>
        </div>
    )
}

export default UserComponent;