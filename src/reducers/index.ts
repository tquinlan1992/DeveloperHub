
import { combineReducers } from 'redux';
import increment from './increment';
import router from './router';
import doc from './doc';
import voiceToCode from './voiceToCode';
import { reducer as ticketList } from '../actions/ticketList';
import addTicket from '../actions/addTicket';
import { AppState } from '../store/AppState';

export default combineReducers<AppState>({ 
    increment, 
    router,
    doc,
    voiceToCode,
    ticketList,
    addTicket
});
