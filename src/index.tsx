
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";
import {Provider} from "react-redux"; //Доступ к state без прокидывания props



let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App
                store= {store.getState()}
                dispatch = {store.dispatch.bind(store)}
            />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(()=> {
    // let state = store.getState()
    rerenderEntireTree()
});