// import {ChangeNewTextType} from "./state";


import {ActionTypes, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {
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


