import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

test("tests that getFullYear returns the correct year", () => {
    const now = new Date();
    expect(getFullYear()).toEqual(now.getFullYear());
});

test("tests that getFooterCopy returns the correct string when true", () => {
    expect(getFooterCopy(true)).toEqual('Atlas School');
});

test("tests that getFooterCopy returns the correct string when false", () => {
    expect(getFooterCopy(false)).toEqual('Atlas School main dashboard');
});

test("tests that getLatestNotification returns the correct string", () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
});
