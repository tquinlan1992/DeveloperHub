import * as React from 'react';
import { AppBar } from "material-ui";

export default class TopAppBar extends React.Component<{}, {}> {

    render() {
        return (<AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />);
    }
}
