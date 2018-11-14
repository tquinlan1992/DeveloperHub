"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
var _1 = require("./");
var testUtils_1 = require("./reducer/testUtils");
function getAnyJestFn() {
    return jest.fn();
}
enzyme_1.configure({ adapter: new Adapter() });
var mockActions = {
    onTagSelectionChange: getAnyJestFn(),
};
describe('when TreeView is given', function () {
    describe('no selectedTags', function () {
        it('should render with no selected tags', function () {
            var props = {
                tagsFolders: testUtils_1.tagsFolders1,
                selectedTags: [],
                onTagSelectionChange: mockActions.onTagSelectionChange,
            };
            var result = enzyme_1.shallow(React.createElement(_1.TreeView, __assign({}, props)));
            expect(result).toMatchSnapshot();
        });
    });
    describe('selectedTags', function () {
        it('should render with selected tags', function () {
            var props = {
                tagsFolders: testUtils_1.tagsFolders1,
                selectedTags: ['id2'],
                onTagSelectionChange: mockActions.onTagSelectionChange,
            };
            var result = enzyme_1.shallow(React.createElement(_1.TreeView, __assign({}, props)));
            expect(result).toMatchSnapshot();
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFDL0IsaUNBQTRDO0FBQzVDLGlEQUFtRDtBQUNuRCx1QkFBOEI7QUFDOUIsaURBQW1EO0FBRW5ELFNBQVMsWUFBWTtJQUNqQixPQUFPLElBQUksQ0FBQyxFQUFFLEVBQVMsQ0FBQztBQUM1QixDQUFDO0FBRUQsa0JBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV0QyxJQUFNLFdBQVcsR0FBRztJQUNoQixvQkFBb0IsRUFBRSxZQUFZLEVBQUU7Q0FDdkMsQ0FBQztBQUVGLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRTtJQUMvQixRQUFRLENBQUMsaUJBQWlCLEVBQUU7UUFDeEIsRUFBRSxDQUFDLHFDQUFxQyxFQUFFO1lBQ3RDLElBQU0sS0FBSyxHQUFHO2dCQUNWLFdBQVcsRUFBRSx3QkFBWTtnQkFDekIsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyxvQkFBb0I7YUFDekQsQ0FBQztZQUNGLElBQU0sTUFBTSxHQUFHLGdCQUFPLENBQUMsb0JBQUMsV0FBUSxlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsY0FBYyxFQUFFO1FBQ3JCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtZQUNuQyxJQUFNLEtBQUssR0FBRztnQkFDVixXQUFXLEVBQUUsd0JBQVk7Z0JBQ3pCLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDckIsb0JBQW9CLEVBQUUsV0FBVyxDQUFDLG9CQUFvQjthQUN6RCxDQUFDO1lBQ0YsSUFBTSxNQUFNLEdBQUcsZ0JBQU8sQ0FBQyxvQkFBQyxXQUFRLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvVHJlZVZpZXcvaW5kZXgudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNoYWxsb3csIGNvbmZpZ3VyZSB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgKiBhcyBBZGFwdGVyIGZyb20gJ2VuenltZS1hZGFwdGVyLXJlYWN0LTE2JztcbmltcG9ydCB7IFRyZWVWaWV3IH0gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdGFnc0ZvbGRlcnMxIH0gZnJvbSAnLi9yZWR1Y2VyL3Rlc3RVdGlscyc7XG5cbmZ1bmN0aW9uIGdldEFueUplc3RGbigpIHtcbiAgICByZXR1cm4gamVzdC5mbigpIGFzIGFueTtcbn1cblxuY29uZmlndXJlKHsgYWRhcHRlcjogbmV3IEFkYXB0ZXIoKSB9KTtcblxuY29uc3QgbW9ja0FjdGlvbnMgPSB7XG4gICAgb25UYWdTZWxlY3Rpb25DaGFuZ2U6IGdldEFueUplc3RGbigpLFxufTtcblxuZGVzY3JpYmUoJ3doZW4gVHJlZVZpZXcgaXMgZ2l2ZW4nLCAoKSA9PiB7XG4gICAgZGVzY3JpYmUoJ25vIHNlbGVjdGVkVGFncycsICgpID0+IHtcbiAgICAgICAgaXQoJ3Nob3VsZCByZW5kZXIgd2l0aCBubyBzZWxlY3RlZCB0YWdzJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgdGFnc0ZvbGRlcnM6IHRhZ3NGb2xkZXJzMSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgIG9uVGFnU2VsZWN0aW9uQ2hhbmdlOiBtb2NrQWN0aW9ucy5vblRhZ1NlbGVjdGlvbkNoYW5nZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzaGFsbG93KDxUcmVlVmlldyB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZSgnc2VsZWN0ZWRUYWdzJywgKCkgPT4ge1xuICAgICAgICBpdCgnc2hvdWxkIHJlbmRlciB3aXRoIHNlbGVjdGVkIHRhZ3MnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgICB0YWdzRm9sZGVyczogdGFnc0ZvbGRlcnMxLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFnczogWydpZDInXSxcbiAgICAgICAgICAgICAgICBvblRhZ1NlbGVjdGlvbkNoYW5nZTogbW9ja0FjdGlvbnMub25UYWdTZWxlY3Rpb25DaGFuZ2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2hhbGxvdyg8VHJlZVZpZXcgey4uLnByb3BzfSAvPik7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b01hdGNoU25hcHNob3QoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==
