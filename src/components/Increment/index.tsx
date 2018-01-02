import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';
import { TreeViewRedux } from '../TreeView';
import { withRouter } from 'react-router-dom';

function thunkTest() {
    return function (dispatch: any) {
        dispatch({ type: 'INCREMENT' });
    };
}

function Increment(params: { 
    currentIncrement: 
    number; 
    increment: Function; 
    incrementThunk: Function; 
    navigateTo: Function;
    history: any;
}) {
    return (
        <div>
            <TreeViewRedux />
            <RaisedButton label={`${params.currentIncrement} Increment`} onClick={() => {
                params.increment();
                params.navigateTo(params.history, '/home');
            }
            } />
        </div>
    );
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        currentIncrement: state.increment.count,
        history: ownProps.history
    };
};

const mapActionsToProps = {
    increment: actions.increment,
    incrementThunk: thunkTest,
    navigateTo: actions.navigateToFeed
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Increment));
