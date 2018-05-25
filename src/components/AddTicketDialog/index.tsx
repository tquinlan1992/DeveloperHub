import * as React from 'react';
import { Dialog, TextField, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core";
import { connect } from 'react-redux';
import { AppState } from "../../store/AppState";

interface AddTicketDialogOwnProps {
    onRequestClose: () => void;
    open: boolean;
}

export class AddTicketDialog extends React.Component<AddTicketDialogOwnProps> {

    onStoryPointsChange(event: React.FormEvent<HTMLInputElement>) {
        event.preventDefault();
        console.log('a', event.currentTarget.value);
        event.stopPropagation();
    }

    render() {
        return (
            <Dialog
                title="Dialog With Actions"
                open={this.props.open}
                onExit={(this.props.onRequestClose.bind(this))}
                fullWidth
            >
                <DialogTitle id="form-dialog-title">Create a Ticket</DialogTitle>
                <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            id="multiline-flexible"
                            label="Description"
                            multiline
                            //value={this.state.multiline}
                            //onChange={this.handleChange('multiline')}
                            //className={classes.textField}
                            margin="dense"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Story Points"
                            type="number"
                            fullWidth
                        onKeyPress={this.onStoryPointsChange.bind(this)}
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={(this.props.onRequestClose.bind(this))} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
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
