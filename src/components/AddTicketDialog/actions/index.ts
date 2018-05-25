import { getRemoteDB } from '../../../database/pouch';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../../store/AppState';
import { fetchProducts } from '../../../actions/ticketList';
// import { SimpleActionCreator } from '../../../actions/util';

export const actionTypes = {
    onStoryPointKeyPress: 'ON_STORY_POINT_KEY_PRESS',
    setTickets: 'SET_TICKETS'
};

export interface SetShowAddTicketDialogParams {
    value: boolean;
}

// const onStoryPointKeyPress = SimpleActionCreator<SetShowAddTicketDialogParams>(actionTypes.onStoryPointKeyPress);

function addTicket(): ThunkAction<void, AppState, void> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        await db.addTicket({title: 'new ticket'});
        await dispatch(fetchProducts());
    };
}

function onStoryPointKeyPress(keypress: KeyboardEvent): ThunkAction<void, AppState, void> {
    return function () {
        //console.log('keypress', keypress.va)
    };
}

export const simpleActions = {
    
};

export default {
    addTicket,
    onStoryPointKeyPress,
    ...simpleActions
};
