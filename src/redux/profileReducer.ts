

export type InitialProfileStateType = {
    profile: InfoProfileType | null
    posts: PostsType []
    newPostText: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}


//SET PROFILE OBJECT
export type InfoProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosProfileType
}

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type PhotosProfileType = {
    small: string
    large: string
}


export const initialState: InitialProfileStateType = {
    profile: null,
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It my first post", likesCount: 4},
        {id: 3, message: "ahahah", likesCount: 3},
        {id: 4, message: "WTF", likesCount: 3},
    ],
    newPostText: '',
}


export const profileReducer = (state = initialState, action: ActionProfileType): InitialProfileStateType => {
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
        case "SET-PROFILE": {
            // console.log(action)
            return {
                ...state, profile: action.profile
            }
        }
        default : {
            return state
        }
    }
}


export type ActionProfileType = addPostACType
    | onPostChangeACType
    | SetUserProfileACType


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

export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: InfoProfileType) => {
    return {
        type: "SET-PROFILE",
        profile
    } as const
}