import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {InfoProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";



//1 типизация стейта
type MapStateToPropsType = {
    profile : InfoProfileType | null
}

//2 типизация диспатча
type MapDispatchPropsType = {
    setUserProfile: (profile: InfoProfileType) => void
}

//5 объединяем 2 типизации , которые выше
type OwnPropsType = MapStateToPropsType & MapDispatchPropsType


//6 создаем параметры для profile
type PathParamsType = {
    userId : string
}

//7  обьединяем PatchParamsType и OwnPropsType
type ProfileContainerAPIType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainerAPI  extends React.Component <ProfileContainerAPIType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2";
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render() {

     return (
         <Profile {...this.props} profile={this.props.profile}/>
     )
 }

}


const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return  {
        profile: state.profileReducer.profile
    }
}



//3 создание withRouter
let WithUrlDataContainerComponent = withRouter(ProfileContainerAPI)

export const ProfileContainer =  connect(mapStateToProps,{
    setUserProfile: setUserProfileAC
}) (WithUrlDataContainerComponent) //4 помещаем её в connect