import { getRemoteDB } from '../../../database/pouch';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../../store/AppState';
import { fetchProducts } from '../../../actions/ticketList';

function addTicket(): ThunkAction<void, AppState, void> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        await db.addTicket({title: 'new ticket'});
        await dispatch(fetchProducts());
    };
}

export const simpleActions = {
    
};

export default {
    addTicket,
    ...simpleActions
};
