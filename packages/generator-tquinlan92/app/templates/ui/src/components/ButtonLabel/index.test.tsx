import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { ButtonLabel } from '.';

function getAnyJestFn() {
    return jest.fn() as any;
}

configure({ adapter: new Adapter() });

const mockActions = {
    changeLabel: getAnyJestFn()
};

it('ButtonLabel should render when given valid props', () => {
    const props = {
        label: 'sampleLabel',
        ...mockActions
    };
    const result = shallow(<ButtonLabel {...props} />);
    expect(result).toMatchSnapshot();
});
