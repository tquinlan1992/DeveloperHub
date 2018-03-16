
import { combineReducers } from 'redux';
import increment from './increment';
import router from './router';
import doc from './doc';
import voiceToCode from './voiceToCode';

export default combineReducers({ 
    increment, 
    router,
    doc,
    voiceToCode
});
