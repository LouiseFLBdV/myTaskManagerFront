import {User} from "./User";
import axios from "axios";
import {baseRender} from "../index";
import {Task} from "./Task";

export const updateNewUserActionCreator = (user:User) => ( {type: UPDATE_NEW_USER, newUser: user})
export const deleteActionCreator = (id:number) => ( {type: DELETE_USER, id: id})
export const addUserActionCreator = () => ( {type: ADD_USER})
export const updateActionCreator = (user:User) => ({type: UPDATE_USER, user:user})
const ADD_USER = 'ADD-USER';
const UPDATE_NEW_USER = 'UPDATE-NEW-USER';
const DELETE_USER = 'DELETE-USER';
const UPDATE_USER = 'UPDATE-USER';

let initialState = {
    users: [] as User[],
    newUser: {
        userName: "",
        firstName: "",
        lastName: "",
        tasks: [] as Task[]
    } as User
}

let initialize = () => {
    initialState.users = [];
    axios.get<User[]>("http://localhost:8080/api/users").then(response =>{
        response.data.forEach(user =>{
            initialState.newUser = new User(user.id, user.userName, user.firstName, user.lastName, user.tasks);
            initialState.users.push(initialState.newUser);
        })
        initialState.newUser = {} as User;
        baseRender();
    });
}

initialize()

export const userComponentReducer = (state:any = initialState, action:any) =>{
    if (action.type === ADD_USER){
        state.newUser.tasks = [];
        axios.post("http://localhost:8080/api/users", state.newUser);
        state.users.push(state.newUser)
    }else if(action.type === UPDATE_NEW_USER){
        state.newUser = action.newUser;
    }else if(action.type===DELETE_USER){
        axios.delete("http://localhost:8080/api/users/" + action.id);
        state.users = state.users.filter((user:any) => {
            if (user.id!==action.id){
                return user;
            }
        })
    }else if(action.type===UPDATE_USER){
        let user = {
            id: action.user.id,
            userName: action.user.userName,
            firstName: action.user.firstName,
            lastName: action.user.lastName,
            tasks: action.user.tasks
        }
        axios.put("http://localhost:8080/api/users", user);
        state.users.filter((user:any)=>{
            if (user.id===action.user.id){
                user = action.user;
            }
            return user;
        })
    }
    return state;
}