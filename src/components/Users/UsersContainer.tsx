import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/userReducer";
import {Dispatch} from "redux";
import UsersC from "./UsersС";



type MapStateToPropsType = {
    users: UsersType[]
}

type mapDispatchPostToPropsType = {
    follow: (userId:string) => void
    unFollow: (userId:string) => void
    setUsers: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.userReducer.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchPostToProps)(UsersC)