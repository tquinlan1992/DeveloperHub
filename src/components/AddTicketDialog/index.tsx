import * as React from 'react';
import { Dialog } from "material-ui";
import { connect } from 'react-redux';
import { AppState } from "../../../store/AppState";

interface AddTicketDialogOwnProps {
    onRequestClose: () => void;
    open: boolean;
}

export class AddTicketDialog extends React.Component<AddTicketDialogOwnProps> {

    render() {
        return (
            <Dialog
                title="Dialog With Actions"
                modal={false}
                open={this.props.open}
                onRequestClose={(this.props.onRequestClose.bind(this))}
            >
                <h1>Add a Ticket </h1>
                </Dialog>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: AddTicketDialogOwnProps) => {
    return {
        ...ownProps
    };
};

export default connect<AddTicketDialogOwnProps, void, AddTicketDialogOwnProps>(mapStateToProps)(AddTicketDialog);
