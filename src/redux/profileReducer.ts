export type ProfilePageType = {
    posts: PostsType []
    newPostText: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It my first post", likesCount: 4},
        {id: 3, message: "ahahah", likesCount: 3},
        {id: 4, message: "WTF", likesCount: 3},
    ],
    newPostText: '',
}


export const profileReducer = (state = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {id: new Date().getTime(), message: state.newPostText, likesCount: 0}

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case "CHANGE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            };
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

