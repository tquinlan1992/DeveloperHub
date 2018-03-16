import increment from './increment';
import navigation from './navigation';
import doc from './doc';
import voiceToCode from './voiceToCode';

const actions = {
    ...increment,
    ...navigation,
    ...doc,
    ...voiceToCode
};

export default actions;
