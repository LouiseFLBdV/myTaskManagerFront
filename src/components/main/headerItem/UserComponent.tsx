import React, {createRef, useState} from "react"
import style from "./UserComponent.module.css";
import TaskComponent from "./task/Task";
import deleteUserIcon from "../../../img/delete.png";
import acceptUserIcon from "../../../img/accept.png"

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

    let deleteUserCommand = () => {
        props.deleteUser(props.user.id)
    }

    let updateUserName = () =>{
        props.updateUserName(props.user, refInputUserName.current.value)
        setUpdateLastName(false)
        setUserNameField(refInputUserName.current.value)
    }

    let updateFirstName = () => {
        props.updateFirstName(props.user, refInputFirstName.current.value)
        setUpdateLastName(false)
        setFirstNameField(refInputFirstName.current.value)
    }

    let updateLastName = () =>{
        props.updateLastName(props.user, refInputLastName.current.value)
        setUpdateLastName(false)
        setLastNameField(refInputLastName.current.value)
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

    let updateFirstNameTemplate = () => {
        if (isUpdateFirstName) {
            setUpdateFirstName(false)
            setFirstNameField(props.user.firstName)
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

    let tasksRender = () => {
        let taskComponent = props.user.tasks.map((task:any)  => {
            return <TaskComponent userName={props.user.userName} user={props.user} id={task.id} title={task.title} desc={task.description}/>
        })
        setTaskHeader(<TaskComponent taskId={"id"} taskTitle={"taskTitle"} taskDesc={"taskDesc"} taskHeader={"yes"} userName={props.user.userName} user={props.user}/>);
        setTasks(taskComponent);
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
                <div className={style.field + " " + style.fieldCommand}><img src={deleteUserIcon} alt="del" onClick={deleteUserCommand}/></div>
            </div>
            <div className={styleTaskContent}>
                <div className={style.temp}>{taskHeader}{tasks}</div>
            </div>
        </div>
    )
}

export default UserComponent;