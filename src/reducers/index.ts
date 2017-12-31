
import { combineReducers } from 'redux';
import increment from './increment';
import treeView from './treeView';

export default combineReducers({ increment, treeView });
