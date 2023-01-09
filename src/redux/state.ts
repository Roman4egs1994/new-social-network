// let  rerenderEntireTree = () =>  {
//     console.log('state is changed')
// }

//POSTS
//////////////////////////////////////////
//Общий стейт для PROFILE
export type ProfilePageType = {
    posts: PostsType []
    newPostText: string
}

//Cтейт для Posts
export type PostsType = {
    id: number
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


//Типизация STORE
export type StoreType = {
    _state: StateType
    _callSubscriber: ()=>void
    getState: ()=> StateType
    addNewPost: () => void
    updateAddNewPost:(newText: string)=> void
    subscribe : (callback: ()=> void) => void
}


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It my first post", likesCount: 4},
                {id: 3, message: "ahahah", likesCount: 3},
                {id: 4, message: "WTF", likesCount: 3},
            ],
            newPostText: 'IT-Kamasutra.com',
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
                {id: 1, message: "Hi"},
                {id: 2, message: "good"},
                {id: 3, message: "goodgoodgoodgood"},
                {id: 4, message: "Hello world"},
                {id: 5, message: "WTF"},
                {id: 6, message: "What?"}
            ]
        }
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState() {
        return this._state
    },
    addNewPost() {
        debugger
        // const newPost: PostsType = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
        const newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost);

        this._callSubscriber();
    },
    updateAddNewPost(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    subscribe(callback) {
        this._callSubscriber = callback // Паттерн наблюдатель
    },

}

// window.store = store;

//STATE c backend
// export const state: StateType = {
//     profilePage: {
//         posts: [
//             {id:1, message: "Hi, how are you?", likesCount: 12},
//             {id:2, message: "It my first post", likesCount: 4},
//             {id:3, message: "ahahah", likesCount: 3},
//             {id:4, message: "WTF", likesCount: 3},
//         ],
//         newPostText: 'IT-Kamasutra.com',
//     },
//    messagesPage: {
//        dialogs: [
//            {id: 1, name: 'Roman'},
//            {id: 2, name: 'Mixa'},
//            {id: 3, name: 'Andrey'},
//            {id: 4, name: 'Volodya'},
//            {id: 5, name: 'Prostofilya'},
//            {id: 6, name: 'Kirill'}
//        ],
//        messages: [
//            {id:1, message: "Hi"},
//            {id:2, message: "good"},
//            {id:3, message: "goodgoodgoodgood"},
//            {id:4, message: "Hello world"},
//            {id:5, message: "WTF"},
//            {id:6, message: "What?"}
//        ]
//    }
// }
////////////////////////////////////////////////////


// export const addNewPost = () => {
//     const newPost:PostsType = {id:5, message: state.profilePage.newPostText, likesCount:0}
//     state.profilePage.posts.push(newPost);
//
//     rerenderEntireTree();
// }


// export const updateAddNewPost = (newText: string) => {
//
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree()
// }


// export const subscribe = (callback: ()=>void) => {
//     rerenderEntireTree = callback // Паттерн наблюдатель
// }


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



