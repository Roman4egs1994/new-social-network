import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/reduxStore";
import {
    InitialStateType, MessagesPropsType,
    onMessagesChangeTextAC,
    onMessagesSendMessageAC
} from "../../redux/dialogsReducer";
import {Dispatch} from "redux";



type mapStateDialogToPropsType = {
    // dialogPage: InitialStateType
    messages: MessagesPropsType[]
    newMessageText: string
}

type mapDispatchDialogToProps = {
    onDialogChangeAC: (changeMessageText: string) => void
    sendMessageAC: () => void
}


const mapStateToProps = (state: AppStateType): mapStateDialogToPropsType => {
    return {
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText
    }
}

const mapDispatchPostToProps = (dispatch: Dispatch): mapDispatchDialogToProps => {
    return {
        onDialogChangeAC: (changeMessageText: string) => {
            dispatch(onMessagesChangeTextAC(changeMessageText))
        },
        sendMessageAC: () => {
            dispatch(onMessagesSendMessageAC())
        }
    }
}

export const DialogContainer = connect(mapStateToProps,mapDispatchPostToProps)(Dialogs)