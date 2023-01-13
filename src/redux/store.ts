
export const Closed = () => {
    console.log('Store.ts утратил свое сущещствование')
}

// //POSTS
// import {ActionProfileType, profileReducer} from "./profileReducer";
// import {ActionDialogType, dialogsReducer} from "./dialogsReducer";
//
//
// //////////////////////////////////////////
// //Общий стейт для PROFILE
// type ProfilePageType = {
//     posts: PostsType []
//     newPostText: string
// }
//
//
// //Cтейт для Posts
// type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }
// //////////////////////////////////////////
//
//
// //////////////////////////////////////////
// //Общий стейт для Dialogs
//  type DialogsType = {
//     messages: MessagesPropsType[]
//     dialogs: DialogsItemPropsType[]
//     newMessageText: string
// }
// //
// // //Стейт для Messages
// type MessagesPropsType = {
//     id?: number
//     message: string
// }
// //
// // //Стейт для Dialogs(туда входят имена пользователей)
// type DialogsItemPropsType = {
//     id: number
//     name: string
// }
// // ////////////////////////////////////////////
//
//
// ////////////////////////////////////////////////
// //Типизация STATE
// type StateType = {
//     profilePage: ProfilePageType
//     dialogPage: DialogsType
// }
//
// //Типизация STORE
// type StoreType = {
//     _state: StateType
//     _callSubscriber: () => void
//     getState: () => StateType
//     subscribe: (callback: () => void) => void
//     dispatch: (action: ActionTypes) => void
// }
//
// type ActionTypes = ActionProfileType | ActionDialogType
//
//  let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCount: 12},
//                 {id: 2, message: "It my first post", likesCount: 4},
//                 {id: 3, message: "ahahah", likesCount: 3},
//                 {id: 4, message: "WTF", likesCount: 3},
//             ],
//             newPostText: 'IT-Kamasutra.com',
//         },
//         dialogPage: {
//             dialogs: [
//                 {id: 1, name: 'Roman'},
//                 {id: 2, name: 'Mixa'},
//                 {id: 3, name: 'Andrey'},
//                 {id: 4, name: 'Volodya'},
//                 {id: 5, name: 'Prostofilya'},
//                 {id: 6, name: 'Kirill'}
//             ],
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "good"},
//                 {id: 3, message: "goodgoodgoodgood"},
//                 {id: 4, message: "Hello world"},
//                 {id: 5, message: "WTF"},
//                 {id: 6, message: "What?"}
//             ],
//             newMessageText: '',
//         }
//     },
//     _callSubscriber() {
//         console.log('store is changed')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(callback) {
//         this._callSubscriber = callback // Паттерн наблюдатель
//     },
//     dispatch(action) {  //action - {type: "ADD-POST"}
//
//         // this._state.profilePage = profileReducer(this._state.profilePage, action)
//         // this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
//         // this._state.profilePage = profileReducer(this._state.profilePage,action)
//
//         this._callSubscriber()
//     }
// }

