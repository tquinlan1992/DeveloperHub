import simpleActions from './simpleActions';
import { Loading } from "../../store/AppState";
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';
import thunkActions from './thunkActions';

const initialState = true;

const loadingSimpleActions = simpleActions('Loading');

export default createReducer<Loading>(initialState, loadingSimpleActions);

export const actions = {
    ...getCreators(loadingSimpleActions),
    ...thunkActions
};
