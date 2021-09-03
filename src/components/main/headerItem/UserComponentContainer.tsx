import React, {createRef, useState} from "react"
import axios from "axios";
import {User} from "../../../redux/User";
import UserComponent from "./UserComponent";
import {
    deleteActionCreator,
    updateActionCreator,
    updateNewUserActionCreator
} from "../../../redux/UserComponentReducer";

const UserComponentContainer = (props:any) => {

    let deleteUserCommand = (id:number) => {
        props.dispatch(deleteActionCreator(id))
    }

    let updateUserName = (user:User, userName:string) =>{
        user.userName = userName;
        props.dispatch(updateNewUserActionCreator(user));
        props.dispatch(updateActionCreator(user))
    }

    let updateFirstName = (user:User, firstName:string) => {
        user.firstName = firstName;
        props.dispatch(updateNewUserActionCreator(user));
        props.dispatch(updateActionCreator(user))
    }

    let updateLastName = (user:User, lastName:string) =>{
        user.lastName = lastName;
        props.dispatch(updateNewUserActionCreator(user));
        props.dispatch(updateActionCreator(user))
    }

    return (
        <UserComponent  user={props.user}
                        deleteUser={deleteUserCommand}
                        updateUserName={updateUserName}
                        updateFirstName={updateFirstName}
                        updateLastName={updateLastName}/>
    )
}

export default UserComponentContainer;