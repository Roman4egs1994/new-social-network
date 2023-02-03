import React from 'react';
import {UsersType} from "../../redux/userReducer";
import {Button} from "../Button/Button";
import styles from "./Users.module.css"
import  axios from "axios";
import usersPhotoNull from '../../assets/images/usersNull.png'


type UsersPropsTypeType = {
    users: UsersType[]
    follow: (userId:string) => void
    unFollow: (userId:string) => void
    setUsers: (users: UsersType[]) => void
}

//КЛАССОВАЯ КОМПОНЕНТА
class UsersC extends React.Component<UsersPropsTypeType, UsersPropsTypeType> {
    render() {

        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }

        console.log('CLASS COMPONENT',this.props.users);



        return   <div>
            {
                this.props.users.map(el => <div key={el.id}>
        <span>
            <div>
                <img src={el.photos.small != null ? el.photos.small : usersPhotoNull} alt="photoLog"
                     className={styles.userPhoto}/>
            </div>
            <div>
                {el.followed
                    ? <Button name={'Unfollow'} callBack={() => this.props.unFollow(el.id)}/>
                    : <Button name={'Follow'} callBack={() => this.props.follow(el.id)}/>
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
    }
}




export default UsersC