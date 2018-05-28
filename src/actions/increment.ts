import actionCreatorFactory from "typescript-fsa";

export const actionTypes = {
    increment: 'INCREMENT'
};

const SimpleActionCreator = actionCreatorFactory();

const increment = SimpleActionCreator<{}>(actionTypes.increment);

export const simpleActions = {
    increment
};

export default {
    ...simpleActions
};
