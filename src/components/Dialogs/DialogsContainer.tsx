import React from 'react';
import {
    DialogsItemPropsType, DialogsType,
    MessagesPropsType,
    onMessagesChangeTextAC,
    onMessagesSendMessageAC
} from "../../redux/dialogsReducer";
import {DispatchType} from "../../App";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";


type DialogStateType = {
    dialogPage: DialogsPropsType
    dispatch: (Action: DispatchType) => void

}

type DialogsPropsType = {
    dialogs: DialogsItemPropsType[]
    messages: MessagesPropsType[]
    newMessageText: string
}


export const DialogsContainer = (props: DialogStateType) => {

    const onchangeMessageTextHandler = (text: string) => {
        props.dispatch(onMessagesChangeTextAC(text))
    }

    const addNewMessagesHandler = () => {
        props.dispatch(onMessagesSendMessageAC())
    }

    return (
        <Dialogs
            dialogPage={props.dialogPage}
            dispatch={props.dispatch}
            onDialogChangeAC={onchangeMessageTextHandler}
            sendMessage={addNewMessagesHandler}
        />
    );
};


