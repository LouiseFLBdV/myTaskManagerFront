import {Task} from "./Task";

export class User{
    private _id:number;
    private _userName: string;
    private _firstName: string;
    private _lastName: string;
    private _tasks: Task[];

    constructor(id:number, userName: string, firstName: string, lastName: string, tasks: Task[]) {
        this._id = id;
        this._userName = userName;
        this._firstName = firstName;
        this._lastName = lastName;
        this._tasks = tasks;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get tasks(): Task[] {
        return this._tasks;
    }

    set tasks(value: Task[]) {
        this._tasks = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}