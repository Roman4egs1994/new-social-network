import React from 'react';
import styles from "./Users.module.css";
import usersPhotoNull from "../../assets/images/usersNull.png";
import {Button} from "../Button/Button";
import {UsersType} from "../../redux/userReducer";


type UsersPresentPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onClickCurrentPageHandler: (pageNumber: number) => void
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
                                }}//Вешаем событие по нажатие,что бы открывать
                                // актуальную страничку
                                key={index}
                            >
                            {p}
                        </span>
                        )
                    })}
                </div>
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
        </>
    );
};

