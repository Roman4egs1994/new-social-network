import React from 'react';
import styles from "./Users.module.css";
import usersPhotoNull from "../../assets/images/usersNull.png";
import {Button} from "../Button/Button";
import {UsersType} from "../../redux/userReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersPresentPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onClickCurrentPageHandler: (pageNumber: number) => void
    followingProgressAC: (isFetching: boolean, id: string) => void
    // followingProgress: boolean
    followingProgress: string[]
}


export const Users = (props: UsersPresentPropsType) => {

    //Подсчет количества страниц ( кол-во страниц = все количество пользователей / количество на 1 странице

    //Cчитаем количество страниц = берем Количество пользователей / количество на одной странице
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []; //Создаем пустой массив страниц
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i) //Берем количество страниц и пушим в массив
    }


    return (
        <>
            <div>
                <div>
                    {/*отображаем наше количество страниц*/}
                    {pages.map((p, index) => {
                        return (
                            <span
                                className={props.currentPage === p ? styles.selectedPage : ""}
                                onClick={(e) => {
                                    props.onClickCurrentPageHandler(p)
                                }}
                                key={index}
                            >
                            {p}
                        </span>
                        )
                    })}
                </div>
                {
                    props.users.map(el => {
                        //подписка
                        const onclickHandlerFollow = () => {

                            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{},{
                            //     withCredentials:true,
                            //     headers: {
                            //         'API-KEY': '60a736fa-51da-4c8e-9364-ebbbd514420d'
                            //     }//авторизован: true
                            // })
                            //     .then(response => {
                            //         if(response.data.resultCode === 0) {
                            //             props.follow(el.id)
                            //         }
                            //     });

                            props.followingProgressAC(true,el.id)
                            usersAPI.getFollow(el.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(el.id)
                                    }
                                    props.followingProgressAC(false,el.id)
                                })
                        }

                        //отписка
                        const onclickHandlerUnFollow = () => {
                            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{
                            //     withCredentials:true ,//авторизован: true
                            //     headers: {
                            //         'API-KEY': '60a736fa-51da-4c8e-9364-ebbbd514420d'
                            //     }
                            // })
                            //
                            //     .then(response => {
                            //         if(response.data.resultCode === 0) {
                            //             props.unFollow(el.id)
                            //         }
                            //     });

                            props.followingProgressAC(true,el.id)
                            usersAPI.getUnfollow(el.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unFollow(el.id)
                                }
                                props.followingProgressAC(false, el.id)
                            })

                        }

                        // const disabledButtonUnfollow = () => {
                        //     if (props.followingProgress === true) {
                        //         return true
                        //     }
                        // }
                        //
                        // const disabledButtonFollow = () => {
                        //     if (props.followingProgress === true) {
                        //         return true
                        //     }
                        // }


                        return (
                            <div key={el.id}>
        <span>
            <div>
                {/*переход к пользователю*/}
                <NavLink to={"/profile/" + el.id}>
                <img src={el.photos.small != null ? el.photos.small : usersPhotoNull} alt="photoLog"
                     className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {el.followed
                    ? <Button  disabled={props.followingProgress.some(id => id === el.id)} name={'Unfollow'} callBack={onclickHandlerUnFollow}/>
                    : <Button  disabled={props.followingProgress.some(id => id === el.id)} name={'Follow'} callBack={onclickHandlerFollow}/>
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
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

