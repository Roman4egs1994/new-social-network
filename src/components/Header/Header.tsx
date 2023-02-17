import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {DataType} from "../../redux/auth-reducer";


type HeaderPropsType = {
    data: DataType | null
    isAuth: boolean
}


export const Header = (props: HeaderPropsType) => {
    console.log(props)
    return (
        <>
            <header className={style.header}>
                <img
                    src="data:image/png;base64,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"
                    alt="logo"/>
                <div className={style.loginBlock}>
                    {props.isAuth ?
                        props.data?.login
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
        </>
    );
};

