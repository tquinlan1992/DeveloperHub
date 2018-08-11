import * as React from "react";
import actions from '../../actions';
import AppState from "../../store/AppState";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
interface Props {
    label: string;
}

interface Actions {
    changeLabel: typeof actions.label.changeLabel;
}

export class ButtonLabel extends React.Component<Props & Actions> {

    onButtonLabelClick() {
        this.props.changeLabel({value: 'newLabel'});
    }

    render() {
        return (
        <Button onClick={this.onButtonLabelClick.bind(this)}>{this.props.label}</Button>
        );
    }
}

const mapStateToProps = ({ label }: AppState) => {
    return label;
};

const mapDispatchToProps = {
    ...actions.label
};

export default connect<Props, Actions>(mapStateToProps, mapDispatchToProps)(ButtonLabel);
