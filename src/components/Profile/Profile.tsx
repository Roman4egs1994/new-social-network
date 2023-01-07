import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";


type ProfilePropsType = {
posts: PostsType[]
}



export const Profile = (props: ProfilePropsType) => {

    return (
        <>
            <div>
                <ProfileInfo/>
                <MyPosts posts = {props.posts}/>
            </div>
        </>
    );
};

