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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0FwcC4xL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQixtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELDJEQUFzRDtBQUN0RCx1REFBa0Q7QUFDbEQsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUM5QyxtREFBdUY7QUFFdkYsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxxQkFBWSxDQUFDO0lBQzFDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFLENBQUMsRUFBRTtRQUNmLFdBQVcsRUFBRSxFQUFFO0tBQ2hCO0NBQ0YsQ0FBQyxFQVg2QixDQVc3QixDQUFDO0FBRVEsUUFBQSxXQUFXLEdBQXlDLFVBQUEsS0FBSztJQUM5RCxPQUFPLENBQ0gsb0JBQUMsS0FBSyxDQUFDLFFBQVE7UUFDWCxvQkFBQyxnQkFBTSxJQUFDLFFBQVEsRUFBQyxRQUFRO1lBQ3JCLG9CQUFDLGlCQUFPO2dCQUNSLG9CQUFDLG9CQUFVLElBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBQyxTQUFTLGdCQUFZLE1BQU07b0JBQzlFLG9CQUFDLGtCQUFRLE9BQUcsQ0FDSDtnQkFDYixvQkFBQyxvQkFBVSxJQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLHVCQUU1RDtnQkFDYixvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLFlBQWUsQ0FDNUIsQ0FDTCxDQUNJLENBQ3BCLENBQUM7QUFDVixDQUFDLENBQUM7QUFFRixJQUFNLEdBQUcsR0FBRyxtQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLG1CQUFXLENBQUMsQ0FBQztBQUVuQyxrQkFBRztBQUVaLGtCQUFlLEdBQUcsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL0FwcC4xL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgV2l0aFN0eWxlcywgY3JlYXRlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGZsZXg6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgbWVudUJ1dHRvbjoge1xuICAgICAgbWFyZ2luTGVmdDogLTEyLFxuICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgIH0sXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgQXBwTm9TdHlsZXM6IFJlYWN0LlNGQzxXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+PiA9IHByb3BzID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMubWVudUJ1dHRvbn0gY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIk1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5mbGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRRdWlubGFuOTIgTXVzaWNcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG59O1xuXG5jb25zdCBBcHAgPSB3aXRoU3R5bGVzKHN0eWxlcykoQXBwTm9TdHlsZXMpO1xuXG5leHBvcnQgeyBBcHAgfTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19
