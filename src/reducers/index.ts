
import { combineReducers } from 'redux';
import increment from './increment';
import router from './router';
import doc from './doc';

export default combineReducers({ 
    increment, 
    router,
    doc
});
