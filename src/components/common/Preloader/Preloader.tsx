import React from 'react';
import preloader from "../../../assets/loading/Spinner.svg";

type PreloaderType = {
    src: string
}


export const Preloader = (props:PreloaderType) => {
    return (
        <>
            <div><img src={props.src}/> </div>
        </>
    );
};

