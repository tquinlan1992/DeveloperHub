import { actionTypes as incrementActionTypes } from './increment';
import { actionTypes as docActionTypes } from './doc';

export default {
    ...incrementActionTypes,
    ...docActionTypes
};
