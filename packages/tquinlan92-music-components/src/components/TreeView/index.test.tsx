import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { TreeView } from './';
import { tagsFolders1 } from './reducer/testUtils';

function getAnyJestFn() {
    return jest.fn() as any;
}

configure({ adapter: new Adapter() });

const mockActions = {
    onTagSelectionChange: getAnyJestFn(),
};

describe('when TreeView is given', () => {
    describe('no selectedTags', () => {
        it('should render with no selected tags', () => {
            const props = {
                tagsFolders: tagsFolders1,
                selectedTags: [],
                onTagSelectionChange: mockActions.onTagSelectionChange,
            };
            const result = shallow(<TreeView {...props} />);
            expect(result).toMatchSnapshot();
        });
    });
    describe('selectedTags', () => {
        it('should render with selected tags', () => {
            const props = {
                tagsFolders: tagsFolders1,
                selectedTags: ['id2'],
                onTagSelectionChange: mockActions.onTagSelectionChange,
            };
            const result = shallow(<TreeView {...props} />);
            expect(result).toMatchSnapshot();
        });
    });
});
