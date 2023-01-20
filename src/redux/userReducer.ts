import {v1} from "uuid";


export type InitialStateType = {
    users: UsersType[]
}

export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type LocationType = {
    city: string
    country: string
}


const initialState: InitialStateType = {
    users: [
        // {
        //     id: v1(),
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiwBZwgngPB4o-4RvrBdHNmjBa_87nVEJX4ZEFiMMUloFYw1-q6aAYsR5uGf6_e6JBpQ&usqp=CAU' ,
        //     followed: true,
        //     fullName: "Dmitry",
        //     status: 'I am a boss',
        //     location: {city: "Minsk", country: "Belarus"}
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiwBZwgngPB4o-4RvrBdHNmjBa_87nVEJX4ZEFiMMUloFYw1-q6aAYsR5uGf6_e6JBpQ&usqp=CAU' ,
        //     followed: false,
        //     fullName: "Roman",
        //     status: 'I am a frontend developer',
        //     location: {city: "Ulyanovsk", country: "Russia"}
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiwBZwgngPB4o-4RvrBdHNmjBa_87nVEJX4ZEFiMMUloFYw1-q6aAYsR5uGf6_e6JBpQ&usqp=CAU' ,
        //     followed: true,
        //     fullName: "Kir",
        //     status: 'I am a boss too',
        //     location: {city: "Minsk", country: "Belarus"}
        // }
    ]
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
            return  {...state, users: [...state.users, ...action.payload.users]}
        }
        default: {
            return state
        }
    }
}


type UserTypeAC = FollowACType | UnFollowACType | setUsersACType


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