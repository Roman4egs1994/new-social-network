//POSTS



//////////////////////////////////////////
//Общий стейт для PROFILE
export type ProfilePageType = {
    posts: PostsType []
}

//Cтейт для Posts
export type PostsType = {
    id:number
    message: string
    likesCount: number
}
//////////////////////////////////////////




//////////////////////////////////////////
//Общий стейт для Dialogs
export type DialogsType = {
    messages: MessagesPropsType[]
    dialogs: DialogsItemPropsType[]
}

//Стейт для Messages
export type MessagesPropsType = {
    id?: number
    message: string
}

//Стейт для Dialogs(туда входят имена пользователей)
export type DialogsItemPropsType = {
    id: number
    name: string
}
////////////////////////////////////////////



////////////////////////////////////////////////
//Типизация STATE
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: DialogsType
}

//STATE c backend
export const state: StateType = {
    profilePage: {
        posts: [
            {id:1, message: "Hi, how are you?", likesCount: 12},
            {id:2, message: "It my first post", likesCount: 4},
            {id:3, message: "ahahah", likesCount: 3},
            {id:4, message: "WTF", likesCount: 3},
        ],

    },
   messagesPage: {
       dialogs: [
           {id: 1, name: 'Roman'},
           {id: 2, name: 'Mixa'},
           {id: 3, name: 'Andrey'},
           {id: 4, name: 'Volodya'},
           {id: 5, name: 'Prostofilya'},
           {id: 6, name: 'Kirill'}
       ],
       messages: [
           {id:1, message: "Hi"},
           {id:2, message: "good"},
           {id:3, message: "goodgoodgoodgood"},
           {id:4, message: "Hello world"},
           {id:5, message: "WTF"},
           {id:6, message: "What?"}
       ]
   }
}
////////////////////////////////////////////////////







//OLD
//POSTS
// const posts: PostsType[] = [
//     {id:1, message: "Hi, how are you?", likesCount: 12},
//     {id:2, message: "It my first post", likesCount: 4},
//     {id:3, message: "ahahah", likesCount: 3},
//     {id:4, message: "WTF", likesCount: 3},
// ]

//DIALOGS USER
// const dialogs: DialogsItemPropsType[] = [
//     {id: 1, name: 'Roman'},
//     {id: 2, name: 'Mixa'},
//     {id: 3, name: 'Andrey'},
//     {id: 4, name: 'Volodya'},
//     {id: 5, name: 'Prostofilya'},
//     {id: 6, name: 'Kirill'}
// ]

//DIALOGS MESSAGES
// const messages: MessagePropsType[] = [
//     {id:1, message: "Hi"},
//     {id:2, message: "good"},
//     {id:3, message: "goodgoodgoodgood"},
//     {id:4, message: "Hello world"},
//     {id:5, message: "WTF"},
//     {id:6, message: "What?"}
// ]



