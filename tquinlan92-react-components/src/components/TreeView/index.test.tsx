import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { TreeView } from './';

function getAnyJestFn() {
    return jest.fn() as any;
}

configure({ adapter: new Adapter() });

const mockActions = {
    onTagSelectionChange: getAnyJestFn(),
};

it('TreeView should render when given valid props', () => {
    const props = {
        tags: [],
        selectedTags: [],
        onTagSelectionChange: mockActions.onTagSelectionChange,
    };
    const result = shallow(<TreeView {...props} />);
    expect(result).toMatchSnapshot();
});
