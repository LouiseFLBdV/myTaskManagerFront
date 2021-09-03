import React from "react";
import style from "./Main.module.css";
import UserComponent from "./headerItem/UserComponent";
import {User} from "../../redux/User";
import UserComponentContainer from "./headerItem/UserComponentContainer";
import UserHeaderComponentContainer from "./header/UserHeaderComponentContainer";

//todo refactor name directory
const Main = (props:any) => {
    let mainItems = props.state.userComponent.users.map((user:User) =>{
        return <UserComponentContainer user={user} newUser={props.state.userComponent.newUser} dispatch={props.dispatch} />
    })
    return (
        <main className={style.main}>
            <div className={style.content}>
                <UserHeaderComponentContainer newUser={props.state.userComponent.newUser} dispatch={props.dispatch}/>
                {mainItems}
            </div>
        </main>
    );
}

export default Main;