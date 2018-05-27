import increment from './increment';
import navigation from './navigation';
import doc from './doc';
import voiceToCode from './voiceToCode';
import simpleActions from './simpleActions';
import thunkActions from './thunkActions';

const actions = {
    ...simpleActions,
    ...thunkActions,
    ...increment,
    ...navigation,
    ...doc,
    ...voiceToCode,
};

export default actions;
