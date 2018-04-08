
import { combineReducers } from 'redux';
import increment from './increment';
import router from './router';
import doc from './doc';
import voiceToCode from './voiceToCode';
import ticketList from './ticketList';

export default combineReducers({ 
    increment, 
    router,
    doc,
    voiceToCode,
    ticketList
});
