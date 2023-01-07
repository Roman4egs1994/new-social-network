import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type ProfileType = {
    state: ProfilePropsType
}

type ProfilePropsType = {
posts: PostsType[]
}



export const Profile = (props: ProfileType) => {

    return (
        <>
            <div>
                <ProfileInfo/>
                <MyPosts posts = {props.state.posts}/>
            </div>
        </>
    );
};

