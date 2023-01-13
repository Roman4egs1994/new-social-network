import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {Messages} from "./Message/Messages";
import {DialogItem} from "./DialogItem/DialogItem";
// import {
//     ActionTypes,
//     DialogsItemPropsType,
//     MessagesPropsType,
//     onMessagesChangeTextAC, onMessagesSendMessageAC
// } from "../../redux/store";
// import {ActionTypes, DialogsItemPropsType, MessagesPropsType,} from "../../redux/store";
import {Button} from "../Button/Button";
import {
    DialogsItemPropsType,
    MessagesPropsType,
    onMessagesChangeTextAC,
    onMessagesSendMessageAC
} from "../../redux/dialogsReducer";
import {DispatchType} from "../../App";
import {Dialogs} from "./Dialogs";


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

