import React from 'react';
import { mount } from 'enzyme';
import Banner from '../components/banner';

describe('Banner page snapshot', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        wrapper = mount(<Banner {...props} />);
    });

    test('renders correctly', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
