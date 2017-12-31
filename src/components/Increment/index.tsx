import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';
import { TreeViewRedux } from '../TreeView';

function thunkTest() {
    return function (dispatch: any) {
        console.log('dispatch tommy', dispatch);
        dispatch({ type: 'INCREMENT' });
    };
}

function Increment(params: { currentIncrement: number; increment: Function; incrementThunk: Function; }) {
    return (
        <div>
            <TreeViewRedux />
            <RaisedButton label={`${params.currentIncrement} Increment`} onClick={() => {
                //params.incrementThunk()
                params.increment();
            }
            } />
        </div>
    );
}

const mapStateToProps = (state: any, ownProps: any) => {
    console.log('ownProps', ownProps);
    return {
        currentIncrement: state.increment.count
    };
};

const mapActionsToProps = {
    increment: actions.increment,
    incrementThunk: thunkTest
};

export default connect(mapStateToProps, mapActionsToProps)(Increment);
