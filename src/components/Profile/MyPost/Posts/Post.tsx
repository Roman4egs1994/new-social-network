import React from 'react';
import style from './Post.module.css'

type PostsPropsType = {
    message: string
    likesCount: number
}


export const Post = (props: PostsPropsType) => {

    return (
        <>
                <div className={style.posts}>
                    <div className={style.item}>
                        <div className={style.avatar}>
                            <img src="https://assets.website-files.com/61e1614e043c2cc2fbafdd22/61e1614e043c2c914dafdde8_Luke%20Avatar%20Square.png" alt=""/>
                            <span className={style.post}>{props.message}</span>
                        </div>
                        <div>
                            <div>LIKE</div>
                            <span>{props.likesCount}</span>
                        </div>

                    </div>
                </div>
        </>
    );
};

