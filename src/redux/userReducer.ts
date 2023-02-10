import {v1} from "uuid";


export type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}




export type UsersType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType

}

export type LocationType = {
    city: string
    country: string
}

export type PhotosType = {
    small: string
    large: string
}


const initialState: InitialStateType = {
    users: [],
    pageSize: 5, //кол-во пользователей на стр
    totalUsersCount: 0, //Максимальное кол-во пользователей
    currentPage: 1 //Актуальная страница
}


export const userReducer = (state = initialState, action: UserTypeAC): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID
                    ? {...el, followed: true}
                    : el
                )
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID
                    ? {...el, followed: false}
                    : el
                )
            }
        }
        case "SET-USERS": {
            return  {...state, users: action.payload.users} //Перезатераем
        }
        case "SET-CURRENT-PAGE" : {
            return  {...state, currentPage: action.newCurrentPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        default: {
            return state
        }
    }
}


type UserTypeAC = FollowACType | UnFollowACType | setUsersACType | setCurrentPageACType | setUsersTotalCounterACType


type FollowACType = ReturnType<typeof followAC>
export const followAC = (userID: string) => {
    return {
        type: "FOLLOW",
        payload: {
            userID
        }
    } as const
}


type UnFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userID: string) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userID
        }
    } as const
}



type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as  const
}

type setCurrentPageACType = ReturnType<typeof  setCurrentPageAC>
export const  setCurrentPageAC = (newCurrentPage: number) => {
    return {
        type : "SET-CURRENT-PAGE",
        newCurrentPage: newCurrentPage
    } as const
}


type setUsersTotalCounterACType = ReturnType<typeof setUsersTotalCounterAC >
export const setUsersTotalCounterAC = (totalCount: number) => {
    return {
        type : "SET-TOTAL-COUNT",
        totalCount : totalCount
    } as const
}