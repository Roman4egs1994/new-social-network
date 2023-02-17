import React from "react";
import {DataType, setAuthUserDataAC} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import axios from "axios";


type HeaderPropsType = {
    data: DataType | null
    setAuthUserData : (data: DataType) => void
    isAuth: boolean
}

type mapStateToPropsType = {
    data: DataType | null
    isAuth: boolean
}

export class HeaderAPIComponent extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true //авторизован: true
        })
            .then(response => {

                if(response.data.resultCode === 0) {
                    // let {id, email,login } = response.data.data;
                    this.props.setAuthUserData(response.data.data)
                }

            });
    }

    render() {
        return (
            <Header  {...this.props} data={this.props.data} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        data: state.authReducer.data,
        isAuth: state.authReducer.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData: setAuthUserDataAC
})(HeaderAPIComponent)