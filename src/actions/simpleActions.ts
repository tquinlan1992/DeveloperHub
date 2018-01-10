import { simpleActions as incrementActions } from './increment';
import { simpleActions as docActions } from './doc';

export default {
    ...incrementActions,
    ...docActions
};
