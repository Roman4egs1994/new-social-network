import React from 'react';
import style from './Message.module.css'


 type MessagePropsType = {
    id?: number
    messages: string
}

export const Messages = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.messages}</div>
    )
}


