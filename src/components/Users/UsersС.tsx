import React from 'react';
import {InitialStateType, setCurrentPageAC, UsersType} from "../../redux/userReducer";
import {Button} from "../Button/Button";
import styles from "./Users.module.css"
import axios from "axios";
import usersPhotoNull from '../../assets/images/usersNull.png'


type UsersPropsTypeType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage : (newCurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

//КЛАССОВАЯ КОМПОНЕНТА
class UsersC extends React.Component<UsersPropsTypeType, UsersPropsTypeType> {


    componentDidMount() { //Идеальное место для сайд эффектов
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount = 50) //Актуализируем количество пользователей с API
             });
    }

    onClickCurrentPageHandler = (pageNumber:number) => {
      this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        //Cчитаем количество страниц = берем Количество пользователей / количество на одной странице
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map((p,index) => {

                    // const onClickCurrentPageHandler = () => {
                    //     this.props.setCurrentPage(p)
                    // }

                    return (
                        <span
                            className={this.props.currentPage === p ? styles.selectedPage : ""}
                            onClick={(e)=>{this.onClickCurrentPageHandler(p)}}
                            key= {index}
                        >
                            {p}
                        </span>
                    )
                })}
            </div>
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