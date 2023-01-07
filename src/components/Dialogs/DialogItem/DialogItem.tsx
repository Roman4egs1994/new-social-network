import React from 'react';
import style from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

export type DialogsItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogsItemPropsType) => {

    const path = "/dialogs/" + props.id //путь + id диалога

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}