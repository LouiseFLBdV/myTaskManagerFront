import React from "react"
import {User} from "../../../redux/User";
import UserHeaderComponent from "./UserHeaderComponent";
import {addUserActionCreator, updateNewUserActionCreator} from "../../../redux/UserComponentReducer";

const UserHeaderComponentContainer = (props:any) => {

    let addUserChangeUserName = (value:string) =>{
        let user:User = props.newUser;
        user.userName = value;
        props.dispatch(updateNewUserActionCreator(user));
    }
    let addUserChangeFirstName = (value:string) =>{
        let user:User = props.newUser;
        user.firstName = value;
        props.dispatch(updateNewUserActionCreator(user));
    }
    let addUserChangeLastName = (value:string) =>{
        let user:User = props.newUser;
        user.lastName = value;
        props.dispatch(updateNewUserActionCreator(user));
    }

    let addUserCommand = () => {
        props.dispatch(addUserActionCreator())
        // axios.post("http://localhost:8080/api/users", user);
        //todo addUser to render
    }

    return (<UserHeaderComponent  user={props.user} newUser={props.newUser} addUser={addUserCommand} newUserName={addUserChangeUserName}  newFirstName={addUserChangeFirstName} newLastName={addUserChangeLastName} />)
}

export default UserHeaderComponentContainer;