import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';

function thunkTest() {
    return function (dispatch: any) {
        dispatch({ type: 'INCREMENT' });
    };
}

interface IncrementProps {
    currentIncrement: number;
}

interface IncrementActions {
    increment: Function;
    incrementThunk: Function;
}
class Increment extends React.Component<IncrementProps & IncrementActions> {

    render() {
        return (
            <div>
                <RaisedButton label={`${this.props.currentIncrement} a 5asdfasf`} onClick={() => {
                    this.props.increment();
                }} />
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        currentIncrement: state.increment.count,
    };
};

const mapActionsToProps = {
    increment: actions.increment,
    incrementThunk: thunkTest,
};

export default connect<IncrementProps, IncrementActions>(mapStateToProps, mapActionsToProps)(Increment);
