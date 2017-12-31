import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';

function thunkTest() {
    return function (dispatch: any) {
        console.log('dispatch tommy', dispatch);
        dispatch({ type: 'INCREMENT' });
    };
}

function Increment(params: { currentIncrement: number; increment: Function; incrementThunk: Function; }) {
    return (
        <RaisedButton label={`${params.currentIncrement} Increment`} onClick={() => {
            //params.incrementThunk();
            params.increment();
        }
        } />
    );
}

const mapStateToProps = (state: any, ownProps: any) => {
    console.log('ownProps', ownProps);
    return {
        currentIncrement: state.increment.count
    };
};

const mapDispatchToProps = {
    increment: actions.increment,
    incrementThunk: thunkTest
};

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
