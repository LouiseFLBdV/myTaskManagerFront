import React, {useState} from "react"
import style from "./MainItem.module.css";
import TaskComponent from "./task/TaskComponent";
import addItem from "../../../img/addItem.png";
import deleteItem from "../../../img/delete.png";

const MainItem = (props) => {

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

    if (props.header==="yes"){
        let tempVar;
        tempVar = style.item + " " + style.itemHeader;
        return (
            <div className={tempVar}>
                <div className={style.fieldId}>{props.id}</div>
                <div className={style.field}>{props.userName}</div>
                <div className={style.field}>{props.firstName}</div>
                <div className={style.field}>{props.lastName}</div>
                <div className={style.field}>{props.tasks}</div>
                <div className={style.fieldCommand}><img src={addItem} alt={"add"}/></div>
            </div>
        )
    }

    let selectUser = () =>{
        if (isUserSelected){
            setTasks(<div> </div>)
            setTaskHeader(<div> </div>)
            setStyleActive("");
            setStyleTaskContent("")
            setUserSelect(false);
        }else{
            setUserSelect(true);
            setStyleActive(style.active)
            setStyleTaskContent(style.taskContent);
            tasksRender();
        }
    }

    let updateUserName = () =>{
        if (isUpdateUserName){
            setUpdateUserName(false)
            setUserNameField(props.userName)
        }else{
            setUpdateUserName(true)
            setUserNameField(<input type="text"/>)
        }
    }
    let updateFirstName = () =>{
        if (isUpdateFirstName){
            setUpdateFirstName(false)
            setFirstNameField(props.firstName)
        }else{
            setUpdateFirstName(true)
            setFirstNameField(<input type="text"/>)
        }
    }
    let updateLastName = () =>{
        if (isUpdateLastName){
            setUpdateLastName(false)
            setLastNameField(props.lastName)
        }else{
            setUpdateLastName(true)
            setLastNameField(<input type="text"/>)
        }
    }

    let tasksRender = () =>{
        let taskComponent = props.tasks.map(task =>{
            return <TaskComponent taskId={task.taskId} taskTitle={task.taskTitle} taskDesc={task.taskDescription}/>
        })
        setTaskHeader(<TaskComponent taskId={"id"} taskTitle={"taskTitle"} taskDesc={"taskDesc"} taskHeader={"yes"}/>);
        setTasks(taskComponent);
    }

    return (
        <div>
            <div className={style.item + " " + styleActive}>
                <div className={style.fieldId}>{props.id}</div>
                <div className={style.field} onDoubleClick={updateUserName}>{userNameField}</div>
                <div className={style.field} onDoubleClick={updateFirstName}>{firstNameField}</div>
                <div className={style.field} onDoubleClick={updateLastName}>{lastNameField}</div>
                <div className={style.field} onDoubleClick={selectUser}>{props.tasks.length}</div>
                <div className={style.fieldCommand}><img src={deleteItem} alt="del"/></div>
            </div>
            <div className={styleTaskContent}>{taskHeader}{tasks}</div>
        </div>
    )
}

export default MainItem;