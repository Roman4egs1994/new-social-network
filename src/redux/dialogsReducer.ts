import {ActionTypes, DialogsType, ProfilePageType} from "./state";



export const dialogsReducer = (state: DialogsType, action: ActionTypes) => {
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