import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getUsersAC, setStatusAC, UsersLessonAjaxType} from "../../redux/FriendsLessonAjaxReducer";
import {AppStateType} from "../../redux/reduxStore";
import axios from "axios";


type PropsType = {
    users: UsersLessonAjaxType[]
    // status: string
    getUsers: (users: UsersLessonAjaxType[]) => void
}

const FriendsLessonAjax = (props: PropsType) => {


    axios.get('https://social-network.samuraijs.com/api/1.0/users?count=60').then(
        response => {
            props.getUsers(response.data.items)
        }
    )

    if (!props.users.length) {
        return <div>USERS NOT FOUND</div>
    }

    return (
        <>
            {
                props.users.map(user =>
                    <div>
                        {!user.photos.small
                            ? <img src={"http://dummyimage.com/100"}/>
                            : <img src={user.photos.small}/>
                        }
                        <span>{user.status}</span>
                    </div>
                )
            }
        </>
    );
};


type mapStateToPropsType = {
    users: UsersLessonAjaxType[]
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.FriendsLessonAjaxReducer.users
    }
}


type mapDispatchToPropsType = {
    getUsers: (users: UsersLessonAjaxType[]) => void
    setStatus: (status: string) => void
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        getUsers: (users: UsersLessonAjaxType[]) => {
            dispatch(getUsersAC(users))
        },
        setStatus: (status: string) => {
            dispatch(setStatusAC(status))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsLessonAjax)