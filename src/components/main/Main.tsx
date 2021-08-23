import React, {useState} from "react";
import style from "./Main.module.css";
import UserComponent from "./headerItem/UserComponent";
import {User} from "../../redux/User";

const Main = (props:any) => {
    let mainItems = props.store.state.users.map((user:User) =>{
        return <UserComponent id={user.id} userName={user.userName} firstName={user.firstName} lastName={user.lastName} tasks={user.tasks}/>
    })
    return (
        <main className={style.main}>
            <div className={style.content}>
                <UserComponent id="id" userName="userName" firstName="firstName" lastName="lastName" tasks="tasks" header="yes"/>
                {mainItems}
            </div>
        </main>
    );
}

export default Main;