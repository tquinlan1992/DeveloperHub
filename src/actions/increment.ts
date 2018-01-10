import { SimpleActionCreator } from './util';

export const actionTypes = {
    increment: 'INCREMENT'
};

const increment = SimpleActionCreator<{}>(actionTypes.increment);

export const simpleActions = {
    increment
};

export default {
    ...simpleActions
};
