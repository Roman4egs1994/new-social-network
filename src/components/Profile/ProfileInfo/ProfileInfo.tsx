import React from 'react';
import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

