import increment from './increment';
import navigation from './navigation';
import doc from './doc';
import voiceToCode from './voiceToCode';
import ticketList from './ticketList';

const actions = {
    ...increment,
    ...navigation,
    ...doc,
    ...voiceToCode,
    ...ticketList
};

export default actions;
