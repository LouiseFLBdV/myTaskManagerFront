import {User} from "./User";
import axios from "axios";
import {renderEntireTree} from "../index";

let initialState = {
    users: [] as User[],
    newUser: {} as User
}

let initialize = () => {
    axios.get<User[]>("http://localhost:8080/api/users").then(response =>{
        response.data.forEach(user =>{
            initialState.newUser = new User(user.id, user.userName, user.firstName, user.lastName, user.tasks);
            initialState.users.push(initialState.newUser);
        })

    });
}

initialize()

export const userComponentReducer = (state:any = initialState, action:any) =>{
    if (action.type === ADD_USER){
        state.users.push(state.newUser)
    }else if(action.type === UPDATE_NEW_USER){
        state.newUser = action.newUser;
    }
    return state;
}

const ADD_USER = 'ADD-USER';
const UPDATE_NEW_USER = 'UPDATE-NEW-USER';
const updateNewUserActionCreator = (user:User) => ( {type: UPDATE_NEW_USER, newUser: user})
