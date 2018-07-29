import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'tquinlan92-typescript-redux-utils';
export { AnyAction };
import { AnyAction as AnyActionFromRedux } from 'redux';
export { AnyActionFromRedux };
import { AppStateCore } from "../../../store";
export default function navigateToFeed(history: any, urlToNavigateTo: string): ThunkAction<void, AppStateCore, void, AnyAction>;
