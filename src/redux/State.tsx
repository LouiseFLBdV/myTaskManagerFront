import {User} from "./User";

export class State{
    private _users: User[];


    constructor() {
        this._users = [];
    }


    get users(): User[] {
        return this._users;
    }

    set users(value: User[]) {
        this._users = value;
    }
}