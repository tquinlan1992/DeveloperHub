import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export class App extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}
