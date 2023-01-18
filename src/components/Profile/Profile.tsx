import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType} from "../../App";
import { PostsType} from "../../redux/profileReducer";


import {MyPostContainer} from "./MyPost/MyPostContainer";


type ProfileType = {
    profilePageStore: ProfilePropsType
    dispatch: (action: DispatchType) => void
}

type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
}


export const Profile = (props: ProfileType) => {

    return (
        <>
            <div>
                <ProfileInfo/>
                <MyPostContainer/>
            </div>
        </>
    );
};

