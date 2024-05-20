import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from './BodySection';

enzyme.configure({ adapter: new Adapter() });

test("tests that BodySectionWithMarginBottom renders without crashing", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test" />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that shallowing BodySectionWithMarginBottom should correctly render a BodySection component and that the props are passed to it correctly", () => {
    const wrapper = shallow(
        <BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('BodySection').props).toBe({ title: "test title", children: (<p>test children node</p>) });
});
