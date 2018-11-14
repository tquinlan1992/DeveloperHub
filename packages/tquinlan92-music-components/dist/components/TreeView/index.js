"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var Folder_1 = require("@material-ui/icons/Folder");
var reducer_1 = require("./reducer");
var exportTypes = require("./exportTypes");
exports.exportTypes = exportTypes;
var lodash_1 = require("lodash");
function getFolderListItem(_a) {
    var folder = _a.folder, onParentClick = _a.onParentClick;
    return (React.createElement(core_1.ListItem, { key: folder._id, onClick: function () { return onParentClick({ _id: folder._id }); }, button: true },
        React.createElement(core_1.ListItemIcon, null,
            React.createElement(Folder_1.default, null)),
        React.createElement(core_1.ListItemText, { primary: folder.name })));
}
function getTagListItem(_a) {
    var tag = _a.tag, onTagClick = _a.onTagClick, checked = _a.checked;
    return (React.createElement(core_1.ListItem, { key: tag._id, button: true },
        React.createElement(core_1.Checkbox, { checked: checked, tabIndex: -1, disableRipple: true, onChange: function (event, checked) { return onTagClick({ _id: tag._id, checked: checked }); } }),
        React.createElement(core_1.ListItemText, { primary: tag.name })));
}
function getTagListItems(_a) {
    var tagsFolders = _a.tagsFolders, currentlySelectedTags = _a.currentlySelectedTags, onTagClick = _a.onTagClick;
    var tags = tagsFolders.filter(function (tagFolder) {
        return !tagFolder.isFolder;
    });
    return tags.map(function (tag) {
        var checked = currentlySelectedTags.includes(tag._id);
        return getTagListItem({ tag: tag, onTagClick: onTagClick, checked: checked });
    });
}
function getFolderListItems(_a) {
    var tagsFolders = _a.tagsFolders, onParentClick = _a.onParentClick;
    var folders = tagsFolders.filter(function (tagFolder) {
        return tagFolder.isFolder;
    });
    return folders.map(function (folder) {
        return getFolderListItem({ folder: folder, onParentClick: onParentClick });
    });
}
function getParentName(_a) {
    var tagsFolders = _a.tagsFolders, parent = _a.parent;
    if (!parent) {
        return "Root:";
    }
    var parentInfo = lodash_1.find(tagsFolders, function (tagFolder) {
        return tagFolder._id === parent;
    });
    console.log('parentInfo', parentInfo);
    return parentInfo ? parentInfo.name : "no folder name";
}
function getListForTagsFolders(_a) {
    var tagsFolders = _a.tagsFolders, parent = _a.parent, onTagClick = _a.onTagClick, currentlySelectedTags = _a.currentlySelectedTags, onParentClick = _a.onParentClick;
    var folderListItems = getFolderListItems({ tagsFolders: tagsFolders, onParentClick: onParentClick });
    var tagListItems = getTagListItems({ tagsFolders: tagsFolders, currentlySelectedTags: currentlySelectedTags, onTagClick: onTagClick });
    var subheader = React.createElement(core_1.ListSubheader, { component: "div" }, parent);
    return (React.createElement(core_1.List, { component: "nav", subheader: subheader },
        folderListItems,
        tagListItems));
}
var TreeView = (function (_super) {
    __extends(TreeView, _super);
    function TreeView(props) {
        var _this = _super.call(this, props) || this;
        var action = reducer_1.setRootStateActionReducer.actionCreator({ tagsFolders: _this.props.tagsFolders, selectedTags: _this.props.selectedTags }).payload;
        var newState = reducer_1.setRootStateActionReducer.reducer(null, action);
        _this.state = newState;
        return _this;
    }
    TreeView.prototype.onTagClick = function (_a) {
        var _id = _a._id, checked = _a.checked;
        var action = reducer_1.onTagClickActionReducer.actionCreator({ _id: _id, checked: checked }).payload;
        var newState = reducer_1.onTagClickActionReducer.reducer(this.state, action);
        this.props.onTagSelectionChange(newState.currentlySelectedTags);
        this.setState(newState);
    };
    TreeView.prototype.onParentClick = function (_a) {
        var _id = _a._id;
        var action = reducer_1.onParentClickActionReducer.actionCreator({ _id: _id, tagsFolders: this.props.tagsFolders }).payload;
        var newState = reducer_1.onParentClickActionReducer.reducer(this.state, action);
        this.setState(newState);
    };
    TreeView.prototype.onBackClick = function () {
        var action = reducer_1.onBackClickActionReducer.actionCreator({ tagsFolders: this.props.tagsFolders }).payload;
        var newState = reducer_1.onBackClickActionReducer.reducer(this.state, action);
        this.setState(newState);
    };
    TreeView.prototype.render = function () {
        var backButton = !this.state.currentParent ? null :
            React.createElement(core_1.Button, { onClick: this.onBackClick.bind(this) }, "Back");
        var parent = getParentName({ tagsFolders: this.props.tagsFolders, parent: this.state.currentParent });
        return (React.createElement("div", null,
            backButton,
            getListForTagsFolders({
                tagsFolders: this.state.currentTagsFolder,
                parent: parent,
                onTagClick: this.onTagClick.bind(this),
                onParentClick: this.onParentClick.bind(this),
                currentlySelectedTags: this.state.currentlySelectedTags
            })));
    };
    return TreeView;
}(React.Component));
exports.TreeView = TreeView;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFDL0IsMENBQWdIO0FBQ2hILG9EQUFtRDtBQUNuRCxxQ0FBcUk7QUFlckksMkNBQTZDO0FBQ3BDLGtDQUFXO0FBQ3BCLGlDQUE4QjtBQUU5QixTQUFTLGlCQUFpQixDQUFDLEVBQTRDO1FBQTFDLGtCQUFNLEVBQUUsZ0NBQWE7SUFDOUMsT0FBTyxDQUNILG9CQUFDLGVBQVEsSUFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsY0FBTSxPQUFBLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBbEMsQ0FBa0MsRUFBRSxNQUFNO1FBQ2hGLG9CQUFDLG1CQUFZO1lBQ1Qsb0JBQUMsZ0JBQVUsT0FBRyxDQUNIO1FBQ2Ysb0JBQUMsbUJBQVksSUFDVCxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksR0FDdEIsQ0FDSyxDQUNkLENBQUM7QUFDTixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsRUFBNEM7UUFBMUMsWUFBRyxFQUFFLDBCQUFVLEVBQUUsb0JBQU87SUFDOUMsT0FBTyxDQUNILG9CQUFDLGVBQVEsSUFDTCxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFDWixNQUFNO1FBRU4sb0JBQUMsZUFBUSxJQUNMLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFDWixhQUFhLFFBQ2IsUUFBUSxFQUFFLFVBQUMsS0FBVSxFQUFFLE9BQWdCLElBQUssT0FBQSxVQUFVLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLEVBQXJDLENBQXFDLEdBQ25GO1FBQ0Ysb0JBQUMsbUJBQVksSUFBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBSSxD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QztJQUM1QixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELG9CQUFDLGFBQU0sSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBRW5DLENBQUM7UUFDZCxJQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUN4RyxPQUFPLENBQ0g7WUFDSyxVQUFVO1lBQ1YscUJBQXFCLENBQUM7Z0JBQ25CLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtnQkFDekMsTUFBTSxRQUFBO2dCQUNOLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCO2FBQzFELENBQUMsQ0FDQSxDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsZUFBQztBQUFELENBL0NBLEFBK0NDLENBL0M2QixLQUFLLENBQUMsU0FBUyxHQStDNUM7QUEvQ1ksNEJBQVEiLCJmaWxlIjoiY29tcG9uZW50cy9UcmVlVmlldy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBMaXN0U3ViaGVhZGVyLCBDaGVja2JveCwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgRm9sZGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRm9sZGVyJztcbmltcG9ydCB7IG9uUGFyZW50Q2xpY2tBY3Rpb25SZWR1Y2VyLCBvbkJhY2tDbGlja0FjdGlvblJlZHVjZXIsIG9uVGFnQ2xpY2tBY3Rpb25SZWR1Y2VyLCBzZXRSb290U3RhdGVBY3Rpb25SZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCB7IFxuICAgIEZvbGRlciwgXG4gICAgVGFnLCBcbiAgICBUcmVlVmlld1N0YXRlLCBcbiAgICBPblRhZ0NsaWNrLCBcbiAgICBPbkZvbGRlckNsaWNrLCBcbiAgICBHZXRMaXN0Rm9yVGFnc0ZvbGRlcnMsIFxuICAgIEdldFRhZ0xpc3RJdGVtLCBcbiAgICBHZXRGb2xkZXJMaXN0SXRlbSwgXG4gICAgVHJlZVZpZXdQcm9wcyxcbiAgICBHZXRUYWdMaXN0SXRlbXMsXG4gICAgR2V0Rm9sZGVyTGlzdGVJdGVtcyxcbiAgICBHZXRQYXJlbnRJbmZvXG59IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBleHBvcnRUeXBlcyBmcm9tICcuL2V4cG9ydFR5cGVzJztcbmV4cG9ydCB7IGV4cG9ydFR5cGVzIH07XG5pbXBvcnQgeyBmaW5kIH0gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gZ2V0Rm9sZGVyTGlzdEl0ZW0oeyBmb2xkZXIsIG9uUGFyZW50Q2xpY2sgfTogR2V0Rm9sZGVyTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlzdEl0ZW0ga2V5PXtmb2xkZXIuX2lkfSBvbkNsaWNrPXsoKSA9PiBvblBhcmVudENsaWNrKHsgX2lkOiBmb2xkZXIuX2lkIH0pfSBidXR0b24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxGb2xkZXJJY29uIC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtmb2xkZXIubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTGlzdEl0ZW0oeyB0YWcsIG9uVGFnQ2xpY2ssIGNoZWNrZWQgfTogR2V0VGFnTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17dGFnLl9pZH1cbiAgICAgICAgICAgIGJ1dHRvblxuICAgICAgICA+XG4gICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogYW55LCBjaGVja2VkOiBib29sZWFuKSA9PiBvblRhZ0NsaWNrKHsgX2lkOiB0YWcuX2lkLCBjaGVja2VkIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGFnLm5hbWV9IC8+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTGlzdEl0ZW1zKHsgdGFnc0ZvbGRlcnMsIGN1cnJlbnRseVNlbGVjdGVkVGFncywgb25UYWdDbGljayB9OiBHZXRUYWdMaXN0SXRlbXMpIHtcbiAgICBjb25zdCB0YWdzID0gdGFnc0ZvbGRlcnMuZmlsdGVyKHRhZ0ZvbGRlciA9PiB7XG4gICAgICAgIHJldHVybiAhdGFnRm9sZGVyLmlzRm9sZGVyO1xuICAgIH0pIGFzIFRhZ1tdO1xuICAgIHJldHVybiB0YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2VkID0gY3VycmVudGx5U2VsZWN0ZWRUYWdzLmluY2x1ZGVzKHRhZy5faWQpO1xuICAgICAgICByZXR1cm4gZ2V0VGFnTGlzdEl0ZW0oeyB0YWcsIG9uVGFnQ2xpY2ssIGNoZWNrZWQgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEZvbGRlckxpc3RJdGVtcyh7IHRhZ3NGb2xkZXJzLCBvblBhcmVudENsaWNrIH06IEdldEZvbGRlckxpc3RlSXRlbXMpIHtcbiAgICBjb25zdCBmb2xkZXJzID0gdGFnc0ZvbGRlcnMuZmlsdGVyKHRhZ0ZvbGRlciA9PiB7XG4gICAgICAgIHJldHVybiB0YWdGb2xkZXIuaXNGb2xkZXI7XG4gICAgfSkgYXMgRm9sZGVyW107XG4gICAgcmV0dXJuIGZvbGRlcnMubWFwKGZvbGRlciA9PiB7XG4gICAgICAgIHJldHVybiBnZXRGb2xkZXJMaXN0SXRlbSh7IGZvbGRlciwgb25QYXJlbnRDbGljayB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50TmFtZSh7IHRhZ3NGb2xkZXJzLCBwYXJlbnQgfTogR2V0UGFyZW50SW5mbykge1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBcIlJvb3Q6XCI7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudEluZm8gPSBmaW5kKHRhZ3NGb2xkZXJzLCB0YWdGb2xkZXIgPT4ge1xuICAgICAgICByZXR1cm4gdGFnRm9sZGVyLl9pZCA9PT0gcGFyZW50O1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdwYXJlbnRJbmZvJywgcGFyZW50SW5mbyk7XG4gICAgcmV0dXJuIHBhcmVudEluZm8gPyBwYXJlbnRJbmZvLm5hbWUgOiBcIm5vIGZvbGRlciBuYW1lXCI7XG59XG5cbmZ1bmN0aW9uIGdldExpc3RGb3JUYWdzRm9sZGVycyh7IHRhZ3NGb2xkZXJzLCBwYXJlbnQsIG9uVGFnQ2xpY2ssIGN1cnJlbnRseVNlbGVjdGVkVGFncywgb25QYXJlbnRDbGljayB9OiBHZXRMaXN0Rm9yVGFnc0ZvbGRlcnMpIHtcblxuICAgIGNvbnN0IGZvbGRlckxpc3RJdGVtcyA9IGdldEZvbGRlckxpc3RJdGVtcyh7dGFnc0ZvbGRlcnMsIG9uUGFyZW50Q2xpY2t9KTtcblxuICAgIGNvbnN0IHRhZ0xpc3RJdGVtcyA9IGdldFRhZ0xpc3RJdGVtcyh7dGFnc0ZvbGRlcnMsIGN1cnJlbnRseVNlbGVjdGVkVGFncywgb25UYWdDbGljayB9KTtcbiAgICBjb25zdCBzdWJoZWFkZXIgPVxuICAgICAgICA8TGlzdFN1YmhlYWRlciBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgIHtwYXJlbnR9XG4gICAgICAgIDwvTGlzdFN1YmhlYWRlcj47XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCIgc3ViaGVhZGVyPXtzdWJoZWFkZXJ9PlxuICAgICAgICAgICAge2ZvbGRlckxpc3RJdGVtc31cbiAgICAgICAgICAgIHt0YWdMaXN0SXRlbXN9XG4gICAgICAgIDwvTGlzdD5cbiAgICApO1xufVxuZXhwb3J0IGNsYXNzIFRyZWVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRyZWVWaWV3UHJvcHMsIFRyZWVWaWV3U3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBzZXRSb290U3RhdGVBY3Rpb25SZWR1Y2VyLmFjdGlvbkNyZWF0b3IoeyB0YWdzRm9sZGVyczogdGhpcy5wcm9wcy50YWdzRm9sZGVycywgc2VsZWN0ZWRUYWdzOiB0aGlzLnByb3BzLnNlbGVjdGVkVGFncyB9KS5wYXlsb2FkO1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHNldFJvb3RTdGF0ZUFjdGlvblJlZHVjZXIucmVkdWNlcihudWxsLCBhY3Rpb24pIGFzIFRyZWVWaWV3U3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICBvblRhZ0NsaWNrKHsgX2lkLCBjaGVja2VkIH06IE9uVGFnQ2xpY2spIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gb25UYWdDbGlja0FjdGlvblJlZHVjZXIuYWN0aW9uQ3JlYXRvcih7IF9pZCwgY2hlY2tlZCB9KS5wYXlsb2FkO1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IG9uVGFnQ2xpY2tBY3Rpb25SZWR1Y2VyLnJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ1NlbGVjdGlvbkNoYW5nZShuZXdTdGF0ZS5jdXJyZW50bHlTZWxlY3RlZFRhZ3MpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBvblBhcmVudENsaWNrKHsgX2lkIH06IE9uRm9sZGVyQ2xpY2spIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gb25QYXJlbnRDbGlja0FjdGlvblJlZHVjZXIuYWN0aW9uQ3JlYXRvcih7IF9pZCwgdGFnc0ZvbGRlcnM6IHRoaXMucHJvcHMudGFnc0ZvbGRlcnMgfSkucGF5bG9hZDtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBvblBhcmVudENsaWNrQWN0aW9uUmVkdWNlci5yZWR1Y2VyKHRoaXMuc3RhdGUsIGFjdGlvbik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIG9uQmFja0NsaWNrKCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBvbkJhY2tDbGlja0FjdGlvblJlZHVjZXIuYWN0aW9uQ3JlYXRvcih7IHRhZ3NGb2xkZXJzOiB0aGlzLnByb3BzLnRhZ3NGb2xkZXJzIH0pLnBheWxvYWQ7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gb25CYWNrQ2xpY2tBY3Rpb25SZWR1Y2VyLnJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBiYWNrQnV0dG9uID0gIXRoaXMuc3RhdGUuY3VycmVudFBhcmVudCA/IG51bGwgOlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQmFja0NsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgIDwvQnV0dG9uPjtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50TmFtZSh7IHRhZ3NGb2xkZXJzOiB0aGlzLnByb3BzLnRhZ3NGb2xkZXJzLCBwYXJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudFBhcmVudCB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2JhY2tCdXR0b259XG4gICAgICAgICAgICAgICAge2dldExpc3RGb3JUYWdzRm9sZGVycyh7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3NGb2xkZXJzOiB0aGlzLnN0YXRlLmN1cnJlbnRUYWdzRm9sZGVyLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIG9uVGFnQ2xpY2s6IHRoaXMub25UYWdDbGljay5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBvblBhcmVudENsaWNrOiB0aGlzLm9uUGFyZW50Q2xpY2suYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5U2VsZWN0ZWRUYWdzOiB0aGlzLnN0YXRlLmN1cnJlbnRseVNlbGVjdGVkVGFnc1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19
