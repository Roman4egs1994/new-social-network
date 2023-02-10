import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCounterAC,
    unFollowAC,
    UsersType
} from "../../redux/userReducer";
import {Dispatch} from "redux";
import UsersC from "./UsersС";



// type MapStateToPropsType = {
//     users: UsersType[]
// }

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


type mapDispatchPostToPropsType = {
    follow: (userId:string) => void
    unFollow: (userId:string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (total: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage
    }
}

const mapDispatchPostToProps = (dispatch: Dispatch): mapDispatchPostToPropsType => {
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

export const UsersContainer = connect(mapStateToProps,mapDispatchPostToProps)(UsersC)