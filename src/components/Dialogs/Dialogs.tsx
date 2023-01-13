import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {Messages} from "./Message/Messages";
import {DialogItem} from "./DialogItem/DialogItem";
import {Button} from "../Button/Button";
import {DialogsItemPropsType, MessagesPropsType,} from "../../redux/dialogsReducer";
import {DispatchType} from "../../App";


type DialogStateType = {
    dialogPage: DialogsPropsType
    dispatch: (Action: DispatchType) => void
    onDialogChangeAC:(changeMessageText: string) => void
    sendMessage:() => void
}

type DialogsPropsType = {
    dialogs: DialogsItemPropsType[]
    messages: MessagesPropsType[]
    newMessageText: string
}


export const Dialogs = (props: DialogStateType) => {


    const dialogsElements = props.dialogPage.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>) //Пользователи
    const messagesElements = props.dialogPage.messages.map(el => <Messages key={el.id} messages={el.message}/>) //Сообщения

    const newMessageRefHandler = React.createRef<HTMLTextAreaElement>()


    const onchangeMessageTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
       props.onDialogChangeAC(text)
        // props.dispatch(onMessagesChangeTextAC(text))
    }

    const addNewMessagesHandler = () => {

        props.sendMessage()
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea
                            placeholder={'Enter new message'}
                            onChange={onchangeMessageTextHandler}
                            ref={newMessageRefHandler}
                            value={props.dialogPage.newMessageText}
                        />
                    </div>
                    <div>
                        <Button name={'Add messages'} callBack={addNewMessagesHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

