import React from 'react';
import style from './Dialogs.module.css'
import {Message, MessagePropsType} from "./Message/Message";
import {DialogItem, DialogsItemPropsType} from "./DialogItem/DialogItem";


export const Dialogs = () => {


    const dialogs: DialogsItemPropsType[] = [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Mixa'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Volodya'},
        {id: 5, name: 'Prostofilya'},
        {id: 6, name: 'Kirill'}
    ]

    const messages: MessagePropsType[] = [
        {id:1, message: "Hi"},
        {id:2, message: "good"},
        {id:3, message: "goodgoodgoodgood"},
        {id:4, message: "Hello world"},
        {id:5, message: "WTF"},
        {id:6, message: "What?"}
    ]


    const dialogsElements = dialogs.map(el => <DialogItem id={el.id} name={el.name}/>) //Пользователи
    const messagesElements = messages.map(el => <Message message={el.message}/>) //Сообщения

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

