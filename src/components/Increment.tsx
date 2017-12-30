import * as React from 'react';
import {  connect } from 'react-redux';

const Increment = (params: { currentIncrement: number; increment: Function; }) => (
    <h1
        onClick={() => {
            params.increment();
        }
        }
    >{params.currentIncrement}</h1>
);

const mapStateToProps = (state: any) => {
    return {
        currentIncrement: state
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        increment: () => {
            dispatch({ type: 'INCREMENT' });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
