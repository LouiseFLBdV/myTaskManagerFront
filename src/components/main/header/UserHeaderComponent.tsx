import React, {createRef, useState} from "react"
import style from "./UserHComponent.module.css";
import addUserIcon from "../../../img/add.png";
import acceptUserIcon from "../../../img/accept.png"

const UserHeaderComponent = (props:any) => {

    //ref addUserTemplate
    let refInputUserName:any  = createRef();
    let refInputFirstName :any = createRef();
    let refInputLastName:any  = createRef();

    //add User state
    const [addUser, setAddUser]:any  = useState("");

    let addUserChangeUserName = () =>{
        props.newUserName(refInputUserName.current.value)
    }
    let addUserChangeFirstName = () =>{
        props.newFirstName(refInputFirstName.current.value)
    }
    let addUserChangeLastName = () =>{
        props.newLastName(refInputLastName.current.value)
    }

    let addUserCommand = () => {

        props.addUser();
        //todo close template
        //todo activate add user
        setAddUser("");
    }

    let addUserTemplate = () => {
        if (addUser === "") {
            setAddUser(
                <div>
                    <form className={style.user + " " + style.addUserRow} action={"#"} method="post">
                        <div className={style.field + " " + style.fieldId}>#</div>
                        <div className={style.field}><input type="text" ref={refInputUserName} onChange={addUserChangeUserName} value={props.newUser.userName}/></div>
                        <div className={style.field}><input type="text" ref={refInputFirstName} onChange={addUserChangeFirstName} value={props.newUser.firstName}/></div>
                        <div className={style.field}><input type="text" ref={refInputLastName} onChange={addUserChangeLastName} value={props.newUser.lastName}/></div>
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

    return (
        <div>
            <div className={style.user + " " + style.userHeader}>
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

export default UserHeaderComponent;