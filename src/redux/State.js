let state = {
    users : [
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
                {
                    id: "#", taskTitle: "task1", taskDescription: "task1"
                },
            ]
        },
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
            ]
        },
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
            tasks: [
            ]
        },
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
            ]
        },
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
            ]
        },
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
            ]
        },
        {id: "#", userName: "userName3ыыыыы", firstName: "firstNaыыыыыыыme3", lastName: "lastыыыName3",
            tasks: [
                {
                    id: "#", taskTitle: "taыыыыыsk1", taskDescription: "taыыыыsk1"
                },
                {
                    id: "#", taskTitle: "taskыыы1", taskDescription: "taskыыы1"
                },
            ]
        },
        {id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
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
            ]
        },
    ]
}

export let addUser = (user) =>{
    user = {
        id: "#", userName: "userName3", firstName: "firstName3", lastName: "lastName3",
        tasks: [
            {
                id: "#", taskTitle: "task1", taskDescription: "task1"
            },
            {
                id: "#", taskTitle: "task2", taskDescription: "task2"
            },
            {
                id: "#", taskTitle: "task3", taskDescription: "task3"
            },
        ]
    };
    state.users.push(user);
}

export default state;