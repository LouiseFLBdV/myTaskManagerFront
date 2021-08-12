import React, {useState} from "react";
import style from "./Main.module.css";
import MainItem from "./headerItem/MainItem";


const Main = (props) => {
    let mainItems = props.users.map(user =>{
        return <MainItem id={user.id} userName={user.userName} firstName={user.firstName} lastName={user.lastName} tasks={user.tasks} command={props.addUser}/>
    })
    return (
        <main className={style.main}>
            <div className={style.content}>
                <MainItem id="#" userName="userName" firstName="firstName" lastName="lastName" tasks="tasks" command="addUser" header="yes"/>
                {mainItems}
            </div>
        </main>
    );
}

export default Main;