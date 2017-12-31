import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

function thunkTest() {
    return function (dispatch: any) {
        console.log('dispatch tommy', dispatch);
        dispatch({ type: 'INCREMENT' });
    };
}

function Increment(params: { currentIncrement: number; increment: Function; incrementThunk: Function;}) {
    return (
        <h1
            onClick={() => {
                //params.incrementThunk();
                params.increment();
            }
            }
        >{params.currentIncrement} Increment</h1>
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
