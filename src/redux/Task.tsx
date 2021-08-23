import {User} from "./User";

export class Task{
    private _taskTitle: string;
    private _taskDesc: string;
    private _user: User;

    constructor(taskTitle:string, taskDesc:string, user:User) {
        this._taskTitle = taskTitle;
        this._taskDesc = taskDesc;
        this._user = user;
    }

    get taskTitle(): string {
        return this._taskTitle;
    }

    set taskTitle(value: string) {
        this._taskTitle = value;
    }

    get taskDesc(): string {
        return this._taskDesc;
    }

    set taskDesc(value: string) {
        this._taskDesc = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }
}