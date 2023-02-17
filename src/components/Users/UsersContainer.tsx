import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followAC,
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
}


type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}




class UsersAPIComponent extends React.Component<UsersPropsTypeType> {
    componentDidMount() { //Идеальное место для сайд эффектов                   //Актуальная страница             //количество на странице
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount = 300) //Актуализируем количество пользователей с API
            });
    }

    onClickCurrentPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
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
        isFetching: state.userReducer.isFetching
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount:setUsersTotalCounterAC,
    toggleIsFetching: toggleIsFetchingAC //Диспатчится не AC а вызов AC
})(UsersAPIComponent)