import * as React from 'react';
import { Dialog, TextField, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core";
import { connect } from 'react-redux';
import { AppState } from "../../store/AppState";
import actions from '../../actions';
import * as _ from 'lodash';

interface AddTicketDialogOwnProps {
    onRequestClose: () => void;
    open: boolean;
}

interface StateProps {
    storyPoint: number | null;
}

interface ComponentActions {
    addTicket: typeof actions.addTicket;
    setStoryPoint: typeof actions.setStoryPoint;
}

export class AddTicketDialog extends React.Component<AddTicketDialogOwnProps & ComponentActions & StateProps> {

    onStoryPointsChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.props.setStoryPoint({ value: event.currentTarget.value});
    }

    onCreate() {
        this.props.addTicket();
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
                            value={this.props.storyPoint || ''}
                        onChange={this.onStoryPointsChange.bind(this)}
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={(this.props.onRequestClose.bind(this))} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.onCreate.bind(this)} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: AddTicketDialogOwnProps) => {
    return {
        storyPoint: state.addTicket.storyPoint,
        ...ownProps
    };
};

const mapDispatchToProps = _.pick(actions, 
    'addTicket',
    'setStoryPoint'
);

export default connect<AddTicketDialogOwnProps & StateProps, ComponentActions, AddTicketDialogOwnProps>(mapStateToProps, mapDispatchToProps)(AddTicketDialog);
