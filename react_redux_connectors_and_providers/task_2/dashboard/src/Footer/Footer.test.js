import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer.js';
import AppContext from '../App/AppContext.js';

import { createStore } from 'redux';
import uiReducer from '../reducers/uiReducer.js';
import { Provider } from 'react-redux';

const store = createStore(uiReducer);

test("tests that Footer renders without crashing", () => {
    const wrapper = shallow(
        <Provider store={store}>
            <Footer />
        </Provider>
    );
    expect(wrapper.exists()).toBe(true);
});

// test("tests that Footer at the very least contains the text 'Copyright'", () => {
//     const wrapper = shallow(<Footer />);
//     expect(wrapper.find('p').text()).toContain('Copyright');
// });

// test("tests that the link is not displayed when the user is logged out within the context", () => {
//     const wrapper = shallow(<Footer />);
//     expect(wrapper.find('a')).toHaveLength(0);
// });

// test("tests that the link is displayed when the user is logged in within the context", () => {
//     const wrapper = mount(
//         <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
//             <Footer />
//         </AppContext.Provider>
//     );
//     // something here that makes the context user logged in
//     expect(wrapper.find('a')).toHaveLength(1);
//     wrapper.unmount();
// });
