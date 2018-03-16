import { simpleActions as incrementActions } from './increment';
import { simpleActions as docActions } from './doc';
import { voiceToCodeSimpleActions } from './voiceToCode';

export default {
    ...incrementActions,
    ...docActions,
    ...voiceToCodeSimpleActions
};
