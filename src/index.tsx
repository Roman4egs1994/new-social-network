import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";
import {addNewPost} from  "./redux/state"
import {rerenderEntireTree} from "./render";




// export const rerenderEntireTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App
//                 state= {state}
//                 addNewPost = {addNewPost}
//             />
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }


rerenderEntireTree(state)