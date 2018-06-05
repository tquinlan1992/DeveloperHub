import * as React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default class TopAppBar extends React.Component<{}, {}> {

    render() {
        return (<AppBar title="Developer Hub">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Title
          </Typography>
            </Toolbar>
        </AppBar>);
    }
}
