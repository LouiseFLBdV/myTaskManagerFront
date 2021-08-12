import {renderEntireTree} from "../render";

let state = {
    users : [
        {id: "1", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
            tasks: [
                {
                    id: "1", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
            ]
        },
        {id: "2", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
            tasks: [
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
            ]
        },
        {id: "3", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
            tasks: [
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
            ]
        },
    ]
}

export let addUser = (user) =>{
    // user = {
    //     id: "4", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
    //     tasks: [
    //         {
    //             id: "1", taskTitle: "task1", taskDescription: "task1"
    //         },
    //         {
    //             id: "2", taskTitle: "task1", taskDescription: "task1"
    //         },
    //         {
    //             id: "3", taskTitle: "task1", taskDescription: "task1"
    //         },
    //     ]
    // }
    state.users.push(user);
    alert("add user")
    renderEntireTree(state, addUser);
}
export default state;