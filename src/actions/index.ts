import increment from './increment';
import navigation from './navigation';
import doc from './doc';

const actions = {
    ...increment,
    ...navigation,
    ...doc
};

export default actions;
