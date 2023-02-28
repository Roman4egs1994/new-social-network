export type UsersLessonAjaxType = {
    id: string,
    name: string,
    status: string,
    photos: PhotosObj
}

type PhotosObj = {
    small: string
    large: string
}


type InitialStateType = {
    status: string | null
    users: UsersLessonAjaxType[]
}


let initialState: InitialStateType = {
    status: null,
    users: []
}


export const FriendsLessonAjaxReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        default: {
            return state
        }
    }
}

type ActionType = GetUsersACType | SetStatusACType

type GetUsersACType = ReturnType<typeof getUsersAC>
export const getUsersAC = (users: UsersLessonAjaxType[]) => {
    return {
        type: "GET-USERS",
        users
    } as const
}


type SetStatusACType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}