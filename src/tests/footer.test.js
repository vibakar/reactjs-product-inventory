import React from 'react';
import { mount } from 'enzyme';
import Footer from '../components/footer';

describe('Footer page snapshot', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        wrapper = mount(<Footer {...props} />);
    });

    test('renders correctly', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
