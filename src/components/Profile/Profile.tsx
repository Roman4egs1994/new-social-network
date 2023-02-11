import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType} from "../../App";
import {InfoProfileType, PostsType} from "../../redux/profileReducer";


import {MyPostContainer} from "./MyPost/MyPostContainer";


export type ProfileType = {
    profilePageStore: ProfilePropsType
    dispatch: (action: DispatchType) => void
    profile: InfoProfileType | null
}

export type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
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

