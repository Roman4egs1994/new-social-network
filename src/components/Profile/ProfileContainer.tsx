import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {InfoProfileType, PostsType, setUserProfileAC} from "../../redux/profileReducer";
import {DispatchType} from "../../App";

type ProfileContainerAPIType = {
    profilePageStore: ProfilePropsType
    dispatch: (action: DispatchType) => void

    setUserProfile: (profile: InfoProfileType) => void
    profile: InfoProfileType | null
}



type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
}




class ProfileContainerAPI  extends React.Component <ProfileContainerAPIType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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



type MapStateToPropsType = {
 profile : InfoProfileType | null
}


const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return  {
        profile: state.profileReducer.profile
    }
}


export const ProfileContainer =  connect(mapStateToProps,{
    setUserProfile: setUserProfileAC
}) (ProfileContainerAPI)