import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followAC, followingProgressAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCounterAC, toggleIsFetchingAC,
    unFollowAC,
    UsersType
} from "../../redux/userReducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/loading/Spinner.svg"
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersPropsTypeType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleIsFetching: (onOffFetching: boolean) => void
    followingProgressAC: (isFetching: boolean, id:string) => void
    // followingProgress: boolean
    followingProgress: string[]
}


type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    // followingProgress: boolean
    followingProgress: string[]
}




class UsersAPIComponent extends React.Component<UsersPropsTypeType> {
    componentDidMount() { //Идеальное место для сайд эффектов
        this.props.toggleIsFetching(true);

        //Получить пользователей
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount = 300) //Актуализируем количество пользователей с api
        });
    }

    onClickCurrentPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        //Переключалка страниц
        usersAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }
    render() {
        return (
            <>
                {/*Показываем загрузку если запрос идет , иначе не показываем*/}
                {this.props.isFetching
                    ? <Preloader src={preloader}/>
                    : null
                }
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onClickCurrentPageHandler={this.onClickCurrentPageHandler}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingProgressAC={this.props.followingProgressAC}
                    followingProgress={this.props.followingProgress}
                />


            </>
        )
    }
}




const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage,
        isFetching: state.userReducer.isFetching,
        followingProgress: state.userReducer.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount:setUsersTotalCounterAC,
    toggleIsFetching: toggleIsFetchingAC, //Диспатчится не AC а вызов AC
    followingProgressAC: followingProgressAC

})(UsersAPIComponent)