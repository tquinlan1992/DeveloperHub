import { mockPouchDB } from '../../utils/testUtils';
mockPouchDB();
import ticketListReducer from './';
import actions from '../../actions/ticketList';
import { TicketList as TicketListState } from '../../store/AppState';

interface TestSetShowAddTicketDialogValueParams {
    initValue: boolean;
    newValue: boolean;
}

function testSetShowAddTicketDialogValue({ initValue, newValue }: TestSetShowAddTicketDialogValueParams) {
    describe(`${newValue} when the current value is ${initValue}`, () => {
        it(`the new showAddTicketDialog should be ${newValue}`, () => {
            const initialState = {
                showAddTicketDialog: initValue
            };
            const action = actions.setShowAddTicketDialog({ value: newValue });
            const newState = ticketListReducer(initialState as TicketListState, action);
            expect(newState).toMatchObject({
                showAddTicketDialog: newValue
            });
        });
    });
}

describe('when the TicketListReducer is', () => {
    describe('given a SetShowAddTicketDialog action with the value', () => {
        testSetShowAddTicketDialogValue({initValue: false, newValue: true});
        testSetShowAddTicketDialogValue({ initValue: true, newValue: true });
        testSetShowAddTicketDialogValue({initValue: true, newValue: false});
        testSetShowAddTicketDialogValue({ initValue: false, newValue: false });
    });
});
