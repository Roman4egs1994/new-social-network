import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCounterAC,
    unFollowAC,
    UsersType
} from "../../redux/userReducer";
import {Dispatch} from "redux";
// import UsersAPIComponent from "./UsersAPIComponent";
import axios from "axios";
import {Users} from "./Users";

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

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


type MapDispatchPostToPropsType = {
    follow: (userId:string) => void
    unFollow: (userId:string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (total: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsTypeType, UsersPropsTypeType> {


    componentDidMount() { //Идеальное место для сайд эффектов                   //Актуальная страница             //количество на странице
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount = 50) //Актуализируем количество пользователей с API
            });
    }

    onClickCurrentPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onClickCurrentPageHandler = {this.onClickCurrentPageHandler}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage
    }
}
const mapDispatchPostToProps = (dispatch: Dispatch): MapDispatchPostToPropsType => {
    return  {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users ) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (newCurrentPage) => {
            dispatch(setCurrentPageAC(newCurrentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCounterAC(totalCount))
        }
    }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchPostToProps)(UsersAPIComponent)