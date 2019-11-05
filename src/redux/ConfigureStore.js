import {createStore, combineReducers} from 'redux';
import {Teams} from './teams'
import {Modal} from './modal'
import {Tournament} from './tournament'
import Dec from './dec'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            teams : Teams,
            modal : Modal,
            tournament : Tournament,
            dec : Dec,
        })
    )
    return store;
};