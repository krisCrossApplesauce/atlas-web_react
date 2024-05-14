import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import BodySection from "./BodySection";

enzyme.configure({ adapter: new Adapter() });

test("tests that BodySection renders without crashing", () => {
    const wrapper = shallow(<BodySection title="test" />);
    expect(wrapper.exists()).toBe(true);
});

test("tests that BodySection renders correctly", () => {
    const wrapper = shallow(
        <BodySection title="test">
            <p>test</p>
        </BodySection>
    );
    expect(wrapper.contains(
        <div className="bodySection">
            <h2>test</h2>
            <p>test</p>
        </div>
    )).toBe(true);
});
