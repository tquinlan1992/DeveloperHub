import * as React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export class App extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <BottomNavigation>
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </React.Fragment>
        );
    }
}
