
import { combineReducers } from 'redux';
import increment from './increment';
import treeView from './treeView';
import router from './router';

export default combineReducers({ 
    increment, 
    treeView, 
    router 
});
