import {ActionTypes, DialogsType} from "./store";



export const initialState: DialogsType = {
    dialogs: [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Mixa'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Volodya'},
        {id: 5, name: 'Prostofilya'},
        {id: 6, name: 'Kirill'}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "good"},
        {id: 3, message: "goodgoodgoodgood"},
        {id: 4, message: "Hello world"},
        {id: 5, message: "WTF"},
        {id: 6, message: "What?"}
    ],
    newMessageText: '',
}



export const dialogsReducer = (state= initialState, action: ActionTypes):DialogsType => {
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