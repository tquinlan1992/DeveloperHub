import * as React from 'react';
import { AppBar } from "material-ui";

export default class TopAppBar extends React.Component<{}, {}> {
    
    render() {
        return (<AppBar title="Developer Hub"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />);
    }
}
