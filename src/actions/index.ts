import increment from './increment';
import navigation from './navigation';
import doc from './doc';
import voiceToCode from './voiceToCode';
import ticketList from './ticketList';
import addTicketDialog from '../components/AddTicketDialog/actions';

const actions = {
    ...increment,
    ...navigation,
    ...doc,
    ...voiceToCode,
    ...ticketList,
    ...addTicketDialog
};

export default actions;
