import { mockPouchDB } from '../../utils/testUtils';
mockPouchDB();
import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { TicketList } from './';
import actions from '../../actions';
import { getAnyJestFn } from '../utils/testUtils';
import * as _ from 'lodash';

configure({ adapter: new Adapter() });

const mockActions = {
    setShowAddTicketDialog: getAnyJestFn(),
    fetchProducts: getAnyJestFn(),
    addTicket: getAnyJestFn(),
    deleteTicket: getAnyJestFn()
};

function testShowAddTicketDialogValue(showAddTicketDialog: boolean) {
    describe(`showAddTicketDialog as ${showAddTicketDialog}`, () => {
        it(`TicketList should show the addTicketDialog open as ${showAddTicketDialog}`, () => {
            const props = {
                showAddTicketDialog,
                setShowAddTicketDialog: mockActions.setShowAddTicketDialog as typeof actions.ticketList.setShowAddTicketDialog,
                fetchProducts: mockActions.fetchProducts as typeof actions.ticketList.fetchProducts,
                addTicket: mockActions.addTicket as typeof actions.addTicket,
                deleteTicket: mockActions.addTicket as typeof actions.addTicket.deleteTicket,
                tickets: [{ title: 'ticketTitle', description: 'description', storyPoint: 3, _id: 'id1', deleted: false}]
            };
            const result = shallow(<TicketList {...props} />);
            expect(result).toMatchSnapshot();
        });
    });
}

describe('describe when the TicketList Component is given', () => {
        testShowAddTicketDialogValue(true);
        testShowAddTicketDialogValue(false);
});

describe('when a user', () => {
    beforeEach(() => {
        _.forEach(mockActions, mockAction => {
            mockAction.mockClear();
        });
    });
    describe('clicks add ticket', () => {
        it('setShowAddTicketDialog should be called with true', () => {
            const props = {
                showAddTicketDialog: false,
                setShowAddTicketDialog: mockActions.setShowAddTicketDialog as typeof actions.ticketList.setShowAddTicketDialog,
                fetchProducts: mockActions.fetchProducts as typeof actions.ticketList.fetchProducts,
                addTicket: mockActions.addTicket as typeof actions.addTicket,
                deleteTicket: mockActions.addTicket as typeof actions.addTicket.deleteTicket,
                tickets: [{ title: 'ticketTitle', description: 'description', storyPoint: 3, _id: 'id1', deleted: false }]
            };
            const result = shallow(<TicketList {...props} />);
            const elementToClick = result.find('[label="Add Ticket"]');
            elementToClick.simulate('click');
            expect(mockActions.setShowAddTicketDialog.mock.calls).toMatchObject([
                [{value: true}]
            ]);
        });
 });
    describe('requests to close addTicket', () => {
        it('setShowAddTicketDialog should be called with false', () => {
            const props = {
                showAddTicketDialog: false,
                setShowAddTicketDialog: mockActions.setShowAddTicketDialog as typeof actions.ticketList.setShowAddTicketDialog,
                fetchProducts: mockActions.fetchProducts as typeof actions.ticketList.fetchProducts,
                addTicket: mockActions.addTicket as typeof actions.addTicket,
                deleteTicket: mockActions.addTicket as typeof actions.addTicket.deleteTicket,
                tickets: [{ title: 'ticketTitle', description: 'description', storyPoint: 3, _id: 'id1', deleted: false }]
            };
            const result = shallow(<TicketList {...props} />);
            const dialogProps: any = result.find('Connect(AddTicketDialog)').props();
            dialogProps.onRequestClose();
            expect(mockActions.setShowAddTicketDialog.mock.calls).toMatchObject([
                [{ value: false }]
            ]);
        });
    });
});
