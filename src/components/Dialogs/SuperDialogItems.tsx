
import {connect} from "react-redux";

import {Dispatch} from "redux";
import {DialogsType, onMessagesChangeTextAC, onMessagesSendMessageAC} from "../../redux/dialogsReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs"; //Для типизации mapDispatchToProps



type MapDispatchToPropsType = { //Что должно быть на выходе
    changeTextAC: (text: string) => void
    sendMessageAC: () => void
}

type MapStatePropsType = { //Какой кусок стейта будет на выходе
    dialogPage: DialogsType
}


// export type DialogPropsType = MapStatePropsType | MapDispatchToPropsType



//возвращаемый стейт для connect
const mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogsReducer
    }
}


//dispatch для connect
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeTextAC: (text: string) => {
            dispatch(onMessagesChangeTextAC(text))
        },
        sendMessageAC:() => {
            dispatch(onMessagesSendMessageAC())
        }
    }
}



export const SuperDialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);