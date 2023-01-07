import React from 'react';
import style from './Dialogs.module.css'
import {Messages} from "./Message/Messages";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsItemPropsType, MessagesPropsType} from "../../redux/state";


type DialogStateType = {
    state: DialogsPropsType
}

type DialogsPropsType = {
    dialogs:DialogsItemPropsType[]
    messages: MessagesPropsType[]
}



export const Dialogs = (props: DialogStateType) => {



    const dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name}/>) //Пользователи
    const messagesElements = props.state.messages.map(el => <Messages messages={el.message}/>) //Сообщения

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

