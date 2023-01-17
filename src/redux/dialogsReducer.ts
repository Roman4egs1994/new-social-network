// import {ActionTypes} from "./store";

//Общий стейт для Dialogs
export type DialogsType = {
    messages: MessagesPropsType[]
    dialogs: DialogsItemPropsType[]
    newMessageText: string
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



export const initialState = {
    dialogs: [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Mixa'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Volodya'},
        {id: 5, name: 'Prostofilya'},
        {id: 6, name: 'Kirill'}
    ] as Array<DialogsItemPropsType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "good"},
        {id: 3, message: "goodgoodgoodgood"},
        {id: 4, message: "Hello world"},
        {id: 5, message: "WTF"},
        {id: 6, message: "What?"}
    ] as Array<MessagesPropsType>,
    newMessageText: '',
}

export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionDialogType):InitialStateType => {
    switch (action.type) {
        case "CHANGE-NEW-MESSAGE-TEXT" : {
            state.newMessageText = action.changeMessageText
            return state
        }
        case "SEND-MESSAGE-DIALOG": {
            const newMessages = {id: new Date().getTime(), message: state.newMessageText}
            state.messages.push(newMessages)
            state.newMessageText = ''
           return  state
        }
        default: {
            return  state
        }

    }

}

export type ActionDialogType = onMessagesSendMessageACType | onMessagesChangeTextACType


export type onMessagesChangeTextACType = ReturnType<typeof onMessagesChangeTextAC>
export const onMessagesChangeTextAC = (changeMessageText: string)=> {
    return {
        type: "CHANGE-NEW-MESSAGE-TEXT",
        changeMessageText: changeMessageText
    } as const
}


export type onMessagesSendMessageACType = ReturnType<typeof onMessagesSendMessageAC>
export const onMessagesSendMessageAC = () => {
    return {
        type: "SEND-MESSAGE-DIALOG"
    } as const
}