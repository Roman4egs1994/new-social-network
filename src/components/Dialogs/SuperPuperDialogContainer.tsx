import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/reduxStore";
import {
    InitialStateType,
    onMessagesChangeTextAC,
    onMessagesSendMessageAC
} from "../../redux/dialogsReducer";
import {Dispatch} from "redux";



type mapStateDialogToPropsType = {
    dialogPage: InitialStateType
}

type mapDispatchDialogToProps = {
    changeTextAC: (text: string) => void
    sendMessageAC: () => void
}


const mapStateToProps = (state: AppStateType): mapStateDialogToPropsType => {
    return {
        dialogPage: state.dialogsReducer
    }
}

const mapDispatchPostToProps = (dispatch: Dispatch): mapDispatchDialogToProps => {
    return {
        changeTextAC: (text:string) => {
            dispatch(onMessagesChangeTextAC(text))
        },
        sendMessageAC: () => {
            dispatch(onMessagesSendMessageAC())
        }
    }
}

export const SuperPuperDialogContainer = connect(mapStateToProps,mapDispatchPostToProps)(Dialogs)