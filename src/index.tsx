
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addNewPost, state, StateType, subscribe, updateAddNewPost} from "./redux/state";





let rerenderEntireTree = () => {
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




//
rerenderEntireTree()

subscribe(rerenderEntireTree);