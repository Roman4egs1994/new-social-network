import React from 'react';
import {UsersType} from "../../redux/userReducer";
import {Button} from "../Button/Button";
import styles from "./Users.module.css"
import axios from "axios";
import usersPhotoNull from '../../assets/images/usersNull.png'


type UsersPropsTypeType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}


// export const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/users',
//     headers:     {
//         "API-KEY": "99d8236f-f0ae-4f8d-ab67-228046f5045c"
//     }
// });

export const Users = (props: UsersPropsTypeType) => {


    //Побочный эффект
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })


    }

    console.log(props.users);

    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
        <span>
            <div>
                <img src={el.photos.small != null ? el.photos.small : usersPhotoNull} alt="photoLog"
                     className={styles.userPhoto}/>
            </div>
            <div>
                {el.followed
                    ? <Button name={'Unfollow'} callBack={() => props.unFollow(el.id)}/>
                    : <Button name={'Follow'} callBack={() => props.follow(el.id)}/>
                }
            </div>
        </span>
                    <span>
            <span>
                <div>{el.name}</div>
                <div>{el.status}</div>
            </span>
            <span>
                <div>{"el.location.country"}</div>
                <div>{"el.location.city"}</div>
            </span>
        </span>
                </div>)
            }
        </div>
    );
};

