import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });

export const AppNoStyles: React.SFC<WithStyles<typeof styles>> = props => {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton className={props.classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={props.classes.flex}>
                        TQuinlan92 Music
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
};

const App = withStyles(styles)(AppNoStyles);

export { App };

export default App;
