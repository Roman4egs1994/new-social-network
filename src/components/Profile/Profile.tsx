import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType} from "../../App";
import {InfoProfileType, PostsType} from "../../redux/profileReducer";


import {MyPostContainer} from "./MyPost/MyPostContainer";


export type ProfileType = {
    profile: InfoProfileType | null
}

export const Profile = (props: ProfileType) => {
    console.log(props)
    return (
        <>
            <div>
                <ProfileInfo profile = {props.profile}/>
                <MyPostContainer/>
            </div>
        </>
    );
};

