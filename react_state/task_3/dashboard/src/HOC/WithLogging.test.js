import React from 'react';
import { mount } from 'enzyme';
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

test("tests that console.log was called on mount and on unmount with Component when the wrapped element is pure html", () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const Component = WithLogging(() => <p />);

    const wrapper = mount(<Component />);
    expect(logSpy).toHaveBeenCalledTimes(1);

    wrapper.unmount();
    expect(logSpy).toHaveBeenCalledTimes(2);

    logSpy.mockRestore();
});

test("tests that console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component", () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const Component = WithLogging(<Login />);

    const wrapper = mount(<Component />);
    expect(logSpy).toHaveBeenCalledWith(`Component Login is mounted`);

    wrapper.unmount();
    expect(logSpy).toHaveBeenCalledWith(`Component Login is going to unmount`);

    logSpy.mockRestore();
});
