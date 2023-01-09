
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";





let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state= {store.getState()}
                addNewPost = {store.addNewPost.bind(store)}
                updateAddNewPost = {store.updateAddNewPost.bind(store)}
                store={store}
                // store={store.getState()}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}




//
rerenderEntireTree()
store.subscribe(rerenderEntireTree);