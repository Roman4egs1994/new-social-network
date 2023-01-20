import React from 'react';
import {UsersType} from "../../redux/userReducer";
import {Button} from "../Button/Button";
import styles from "./Users.module.css"
import {v1} from "uuid";

type UsersPropsTypeType = {
    users: UsersType[]
    follow: (userId:string) => void
    unFollow: (userId:string) => void
    setUsers: (users: UsersType[]) => void
}


export const Users = (props: UsersPropsTypeType) => {


    //Побочный эффект
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiwBZwgngPB4o-4RvrBdHNmjBa_87nVEJX4ZEFiMMUloFYw1-q6aAYsR5uGf6_e6JBpQ&usqp=CAU' ,
                followed: true,
                fullName: "Dmitry",
                status: 'I am a boss',
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiwBZwgngPB4o-4RvrBdHNmjBa_87nVEJX4ZEFiMMUloFYw1-q6aAYsR5uGf6_e6JBpQ&usqp=CAU' ,
                followed: false,
                fullName: "Roman",
                status: 'I am a frontend developer',
                location: {city: "Ulyanovsk", country: "Russia"}
            },
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiwBZwgngPB4o-4RvrBdHNmjBa_87nVEJX4ZEFiMMUloFYw1-q6aAYsR5uGf6_e6JBpQ&usqp=CAU' ,
                followed: true,
                fullName: "Kir",
                status: 'I am a boss too',
                location: {city: "Minsk", country: "Belarus"}
            }
        ])
    }



    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
        <span>
            <div>
                <img src={el.photoUrl} alt="photoLog" className={styles.userPhoto}/>
            </div>
            <div>
                {el.followed
                    ? <Button name={'Unfollow'} callBack={()=>props.unFollow(el.id)}/>
                    : <Button name={'Follow'} callBack={()=>props.follow(el.id)}/>
                }
            </div>
        </span>
                    <span>
            <span>
                <div>{el.fullName}</div>
                <div>{el.status}</div>
            </span>
            <span>
                <div>{el.location.country}</div>
                <div>{el.location.city}</div>
            </span>
        </span>
                </div>)
            }
        </div>
    );
};

