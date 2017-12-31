import * as React from 'react';
import { connect } from 'react-redux';

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
                params.incrementThunk();
                params.increment();
            }
            }
        >{params.currentIncrement} Increment</h1>
    );
}

const mapStateToProps = (state: any) => {
    console.log('state', state);
    return {
        currentIncrement: state.increment.count
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        increment: () => {
            dispatch({ type: 'INCREMENT' });
        },
        incrementThunk: () => {
            dispatch(thunkTest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
