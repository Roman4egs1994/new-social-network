import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import {state} from "./redux/state";
import {addNewPost, StateType, updateAddNewPost} from "./redux/state"

// export type rerenderEntireTreePropsType  ={
//     state: StateType
// }


export const rerenderEntireTree = (state:  StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state= {state}
                addNewPost = {addNewPost}
                updateAddNewPost = {updateAddNewPost}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
