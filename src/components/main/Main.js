import React from "react";
import style from "./Main.module.css";
import Users from "./headerItem/Users";


const Main = (props) => {
    let mainItems = props.state.users.map(user =>{
        return <Users id={user.id} userName={user.userName} firstName={user.firstName} lastName={user.lastName} tasks={user.tasks}/>
    })
    return (
        <main className={style.main}>
            <div className={style.content}>
                <Users id="id" userName="userName" firstName="firstName" lastName="lastName" tasks="tasks" header="yes" addUser={props.addUser}/>
                {mainItems}
            </div>
        </main>
    );
}

export default Main;