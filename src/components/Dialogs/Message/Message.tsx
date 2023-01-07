import React from 'react';
import style from './Message.module.css'


export type MessagePropsType = {
    id?: number
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}


