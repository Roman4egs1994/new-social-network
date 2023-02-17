

type InitialStateType = {
    data: DataType | null
    isFetching: boolean
    isAuth: boolean
}


export type DataType = {
    id: number  | null,
    email: string | null,
    login:  string | null
}

export const initialState: InitialStateType = {
    data: null,
    isFetching: false,
    isAuth: true
}



type AuthReducerType = SetUserDataACType

export const authReducer = (state = initialState, action:AuthReducerType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {

            return {...state,
                data: {...action.data},
                isAuth: true
            }
        }
        default: {
            return  state
        }
    }
}


export type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (data:DataType) => {

    return {
        type: "SET-USER-DATA",
        data
    } as const
}