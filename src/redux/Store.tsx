import axios from "axios";
import {User} from "./User";
import {State} from "./State";

export class Store {
    private _state: State;

    private _rerender:any = () =>{
        console.log("rerender")
    }

    constructor() {
        this._state = new State();
        this.initialize();
    }


    get state(): State {
        return this._state;
    }

    set state(value: State) {
        this._state = value;
    }

    private initialize(){
        axios.get<User[]>("http://localhost:8080/api/users").then(response =>{
            response.data.forEach(user =>{
                this.addUser(new User(user.id, user.userName, user.firstName, user.lastName, user.tasks))
            })
            this._rerender(this);
        });
    }

    addUser(user:User){
        this._state.users.push(user);
    }


    get rerender(): any {
        return this._rerender;
    }

    set rerender(value: any) {
        this._rerender = value;
    }
}