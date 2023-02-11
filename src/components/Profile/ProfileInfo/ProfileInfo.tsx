import React from 'react';
import styles from './ProfileInfo.module.css'
import {InfoProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import preloader from "../../../assets/loading/Spinner.svg"
type ProfileInfoPropsType = {
    profile: InfoProfileType | null
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader src={preloader}/>
    }
    console.log(props)
    return (
        <div>
            <div>
                <img src={''} alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    );
};

