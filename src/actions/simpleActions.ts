import { simpleActions as incrementActions } from './increment';
import { simpleActions as docActions } from './doc';
import { voiceToCodeSimpleActions } from './voiceToCode';
import { simpleActions as ticketListActions } from './ticketList';

export default {
    ...incrementActions,
    ...docActions,
    ...voiceToCodeSimpleActions,
    ...ticketListActions
};
