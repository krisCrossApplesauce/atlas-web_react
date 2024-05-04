import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

test("getFullYear returns the correct year", () => {
    const now = new Date();
    expect(getFullYear()).toEqual(now.getFullYear());
});

test("getFooterCopy returns the correct string when true", () => {
    expect(getFooterCopy(true)).toEqual('Atlas School');
});

test("getFooterCopy returns the correct string when false", () => {
    expect(getFooterCopy(false)).toEqual('Atlas School main dashboard');
});

test("getLatestNotification returns the correct string", () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
});
