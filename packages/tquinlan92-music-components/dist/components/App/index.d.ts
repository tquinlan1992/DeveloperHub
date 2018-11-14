import * as React from "react";
import { WithStyles, Theme } from "@material-ui/core/styles";
declare const styles: (theme: Theme) => {
    root: {
        flexGrow: number;
    };
    flex: {
        flexGrow: number;
    };
    menuButton: {
        marginLeft: number;
        marginRight: number;
    };
};
export declare const AppNoStyles: React.SFC<WithStyles<typeof styles>>;
declare const App: React.ComponentType<import("@material-ui/core").Overwrite<Pick<import("@material-ui/core/styles/withStyles").StyledComponentProps<"flex" | "root" | "menuButton">, never>, import("@material-ui/core/styles/withStyles").StyledComponentProps<"flex" | "root" | "menuButton">>>;
export { App };
export default App;
//# sourceMappingURL=index.d.ts.map