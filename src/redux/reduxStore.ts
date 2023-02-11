import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    userReducer: userReducer
    // sidebarReduce:dialogsReducer
}) //Берем все редюсеры и объединяем их (смешиваем)



// export type AppStateType = ReturnType<typeof store.getState>
export type AppStateType = ReturnType<typeof rootReducer>

//Создаем Redux , отдаем ему все reducer
export const store = createStore(rootReducer)


