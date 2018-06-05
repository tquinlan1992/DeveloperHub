import simpleActions from './simpleActions';
import { Loading } from "../../store/AppState";
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';
import thunkActions from './thunkActions';

const initialState = true;

const loadingSimpleActions = simpleActions('Loading');

export default {
    reducer: createReducer<Loading>(initialState, loadingSimpleActions),
    actions: {
        ...getCreators(loadingSimpleActions),
        ...thunkActions
    }
};
