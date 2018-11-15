"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var IconButton_1 = require("@material-ui/core/IconButton");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var Typography_1 = require("@material-ui/core/Typography");
var Button_1 = require("@material-ui/core/Button");
var styles_1 = require("@material-ui/core/styles");
var styles = function (theme) { return styles_1.createStyles({
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
}); };
exports.AppNoStyles = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(AppBar_1.default, { position: "static" },
            React.createElement(Toolbar_1.default, null,
                React.createElement(IconButton_1.default, { className: props.classes.menuButton, color: "inherit", "aria-label": "Menu" },
                    React.createElement(MenuItem_1.default, null)),
                React.createElement(Typography_1.default, { variant: "title", color: "inherit", className: props.classes.flex }, "TQuinlan92 Music"),
                React.createElement(Button_1.default, { color: "inherit" }, "Login")))));
};
var App = styles_1.withStyles(styles)(exports.AppNoStyles);
exports.App = App;
exports.default = App;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0FwcC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBK0I7QUFDL0IsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCwyREFBc0Q7QUFDdEQsdURBQWtEO0FBQ2xELDJEQUFzRDtBQUN0RCxtREFBOEM7QUFDOUMsbURBQXVGO0FBRXZGLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEscUJBQVksQ0FBQztJQUMxQyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBQ0QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7S0FDWjtJQUNELFVBQVUsRUFBRTtRQUNWLFVBQVUsRUFBRSxDQUFDLEVBQUU7UUFDZixXQUFXLEVBQUUsRUFBRTtLQUNoQjtDQUNGLENBQUMsRUFYNkIsQ0FXN0IsQ0FBQztBQUVRLFFBQUEsV0FBVyxHQUF5QyxVQUFBLEtBQUs7SUFDOUQsT0FBTyxDQUNILG9CQUFDLEtBQUssQ0FBQyxRQUFRO1FBQ1gsb0JBQUMsZ0JBQU0sSUFBQyxRQUFRLEVBQUMsUUFBUTtZQUNyQixvQkFBQyxpQkFBTztnQkFDUixvQkFBQyxvQkFBVSxJQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsU0FBUyxnQkFBWSxNQUFNO29CQUM5RSxvQkFBQyxrQkFBUSxPQUFHLENBQ0g7Z0JBQ2Isb0JBQUMsb0JBQVUsSUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSx1QkFFNUQ7Z0JBQ2Isb0JBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxZQUFlLENBQzVCLENBQ0wsQ0FDSSxDQUNwQixDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsSUFBTSxHQUFHLEdBQUcsbUJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxtQkFBVyxDQUFDLENBQUM7QUFFbkMsa0JBQUc7QUFFWixrQkFBZSxHQUFHLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9BcHAvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBXaXRoU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lKSA9PiBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgZmxleDoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBtZW51QnV0dG9uOiB7XG4gICAgICBtYXJnaW5MZWZ0OiAtMTIsXG4gICAgICBtYXJnaW5SaWdodDogMjAsXG4gICAgfSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBBcHBOb1N0eWxlczogUmVhY3QuU0ZDPFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz4+ID0gcHJvcHMgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwiTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmZsZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgVFF1aW5sYW45MiBNdXNpY1xuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbn07XG5cbmNvbnN0IEFwcCA9IHdpdGhTdHlsZXMoc3R5bGVzKShBcHBOb1N0eWxlcyk7XG5cbmV4cG9ydCB7IEFwcCB9O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=
