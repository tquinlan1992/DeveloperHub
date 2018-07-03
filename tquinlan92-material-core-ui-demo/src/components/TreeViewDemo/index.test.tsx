import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { TreeViewDemo } from './';

function getAnyJestFn() {
    return jest.fn() as any;
}

configure({ adapter: new Adapter() });

const mockActions = {
    onTagSelectionChange: getAnyJestFn(),
    setDisplaySelectedTags: getAnyJestFn()
};

it('TreeView should render when given valid props', () => {
    const props = {
        tagsFolders: [],
        selectedTags: [],
        onTagSelectionChange: mockActions.onTagSelectionChange,
        displaySelectedTags: false,
        setDisplaySelectedTags: mockActions.setDisplaySelectedTags
    };
    const result = shallow(<TreeViewDemo {...props} />);
    expect(result).toMatchSnapshot();
});
