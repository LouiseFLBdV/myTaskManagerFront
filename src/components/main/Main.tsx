import React from "react";
import style from "./Main.module.css";
import UserComponent from "./headerItem/UserComponent";
import {User} from "../../redux/User";

const Main = (props:any) => {
    let mainItems = props.state.userComponent.users.map((user:User) =>{
        return <UserComponent user={user} newUser={props.state.userComponent.newUser} dispatch={props.dispatch} />
    })
    return (
        <main className={style.main}>
            <div className={style.content}>
                <UserComponent user={{}} header={"yes"} newUser={props.state.userComponent.newUser} dispatch={props.dispatch}/>
                {mainItems}
            </div>
        </main>
    );
}

export default Main;