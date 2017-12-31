import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Theme extends React.Component<any, any> {
    muiTheme = getMuiTheme({
        palette: {
            primary1Color: '#FFFFFF',
            accent1Color: '#00D036',
            alternateTextColor: '#00D036'
        },
        appBar: {
            height: 50
        }
    });
    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

export default Theme;
