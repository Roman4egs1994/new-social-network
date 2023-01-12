import {ActionTypes} from "./store";



export type ProfilePageNewType = {
    posts: PostsNewType []
    newPostText: string
}



export type PostsNewType = {
    id: number
    message: string
    likesCount: number
}


export const initialState: ProfilePageNewType = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It my first post", likesCount: 4},
            {id: 3, message: "ahahah", likesCount: 3},
            {id: 4, message: "WTF", likesCount: 3},
        ],
        newPostText: 'IT-Kamasutra.com',
    }


export const profileReducer = (state = initialState, action: ActionTypes): ProfilePageNewType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {id: new Date().getTime(), message: state.newPostText, likesCount: 0}
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        }
        case "CHANGE-NEW-POST-TEXT": {
            state.newPostText = action.newText;
            return state
        }
        default : {
            return state
        }
    }
}





export type ActionProfileType = addPostACType | onPostChangeACType


type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

type onPostChangeACType = ReturnType<typeof onPostChangeAC>
export const onPostChangeAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-POST-TEXT",
        newText: newText
    } as const
}



























//
// export const profileReducer = (store: ProfilePageType, action: ActionTypes): ProfilePageType => {
//     switch (action.type) {
//         case "ADD-POST": {
//             const newPost = {id: new Date().getTime(), message: store.newPostText, likesCount: 0}
//             store.posts.push(newPost);
//             store.newPostText = '';
//             return store
//         }
//         case "CHANGE-NEW-POST-TEXT": {
//             store.newPostText = action.newText;
//             return store
//         }
//         default : {
//             return store
//         }
//     }
// }
//
// export type ActionProfileType = addPostACType | onPostChangeACType
//
//
// type addPostACType = ReturnType<typeof addPostAC>
// export const addPostAC = () => {
//     return {
//         type: "ADD-POST"
//     } as const
// }
//
// type onPostChangeACType = ReturnType<typeof onPostChangeAC>
// export const onPostChangeAC = (newText: string) => {
//     return {
//         type: "CHANGE-NEW-POST-TEXT",
//         newText: newText
//     } as const
// }
//

